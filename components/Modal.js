import react, {useState} from "react"
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

const ModalItem = (props) =>{

    const {visible, onDelete, item, closeModal} = props;

    return(
        <Modal
      animationType='slide'
      visible={visible}
      transparent = {false}
      >
        <View style={styles.content}>
          <View style={styles.closeButton}>
          <Button onPress={closeModal} title="Cerrar"/>
          </View>
          <View>
            <Text>Mi Modal</Text>
          </View>
          <View>
            <Text>Estas seguro que deseas borrarlo?</Text>
          </View>
          <View>
            <Text>{item.name}</Text>
          </View>

          <View>
            <Button onPress={onDelete.bind(this, item.id)} title="Confirmar"/>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  content:{
    width:'100%',  
    padding:20,
    shadowColor: '#e2e8ee',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 1
  },

  closeButton:{
    alignContent:'flex-end'
  }
});

export default ModalItem