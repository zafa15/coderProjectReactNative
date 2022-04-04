//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddItem from './components/AddItem';
import IndexListItem from './components/List/IndexListItem';
import ModalItem from './components/Modal';

export default function App() {
  const [counter, setCounter] = useState(3)
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([{ id: 1, name: 'Tablet' }, { id: 2, name: 'Iphone' }]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const onHandlerChangeItem = (txt) => setTextItem(txt);
  /* const renderItem = data => <Text key={data.item.id} onPress={onHandlerModal.bind(this, data.item.id)}>{data.item.name}</Text>;
 */
  const addItem = () => {

    if (textItem !== '') {
      setItemList(currentItems => [
        ...currentItems,
        {
          id: counter,
          name: textItem
        }
      ])
      setTextItem('');
      setCounter(counter + 1);
    } else {
      console.log('No entra nada');
    }
  }


  const onHandlerDelete = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }
  

  const onHandlerModal = id =>{
    setItemSelected(itemList.filter(item => item.id === id)[0]);
    setModalVisible(!modalVisible);
  }

  const closeModal = () => {
    setModalVisible(!modalVisible);
  }



  return (
    <View style={styles.container}>
      <AddItem onAddItem={addItem} onChange={onHandlerChangeItem} value={textItem}/>
      <View style={styles.body}>
        <IndexListItem itemList={itemList} onHandlerModal={onHandlerModal}/>
      </View>

      <View style={styles.modalContent}>
        <ModalItem visible={modalVisible} onDelete={onHandlerDelete} item={itemSelected} closeModal={closeModal}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfd',
  },

  header: {
    backgroundColor: '#ffffff',
    color: '#fff',
    padding: 20,
    shadowColor: '#e2e8ee',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 1
  },

  body: {
    padding: 20
  },

  textBold: {
    fontWeight: 'bold'
  },

  inputText: {
    padding: 8,
    marginBottom: 10
  },

  modalContent:{

  }

});
