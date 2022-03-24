//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(3)
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([{ id: 1, name: 'Iosef' }, { id: 2, name: 'Dali' }]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(true);

  const onHandlerChangeItem = (txt) => setTextItem(txt);
  const renderItem = data => <Text key={data.item.id}>{data.item.name}</Text>;

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



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBold}>Hello World !</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Ingrese su numero"
          value={textItem}
          onChangeText={onHandlerChangeItem} />
        <Button title='Agregar' onPress={addItem} />
      </View>
      <View style={styles.body}>
        {/* {
          itemList.map(item => <Text key={item.id}>{item.name}</Text>)
        } */}
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <Modal
      animationType='slide'
      visible={modalVisible}
      >
        <View>
          <Text>Mi Modal</Text>
        </View>
        <View>
          <Text>Estas seguro que deseas borrarlo?</Text>
        </View>
        <View>
          <Text>{itemSelected.name}</Text>
        </View>

        <View>
          <Button onPress={onHandlerDelete.bind(this, itemSelected.id)} title="Confirmar"/>
        </View>

      </Modal>

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
  }
});
