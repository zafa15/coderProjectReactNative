import react,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AddItem = (props) => {

    const {onAddItem, onChange, value} = props

    return(
        <View style={styles.header}>
            <Text style={styles.textBold}>Hello World !</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Ingrese su numero"
            value={value}
            onChangeText={onChange} />
            <Button title='Agregar' onPress={onAddItem} />
      </View>
    )
}

const styles = StyleSheet.create({
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
    
      textBold: {
        fontWeight: 'bold',
        marginBottom:10
      },
    
      inputText: {
        padding: 8,
        marginBottom: 10
      }
});

export default AddItem;