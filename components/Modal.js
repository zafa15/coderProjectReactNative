import react, {useState} from "react"
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

const ModalItem = (props) =>{

    const {visible, onDelete, item, closeModal} = props;

    return(
        <Modal
      animationType='slide'
      visible={visible}
      >
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

      </Modal>
    )
}

const styles = StyleSheet.create({

});

export default ModalItem