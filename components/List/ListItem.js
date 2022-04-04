import react from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity 
} from 'react-native';

const ListItem = (props) =>{

    const {dataList,onPressHandler} = props;
    //console.log(dataList);
    return(
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.itemList}>
                <Text style={styles.textItemList}>{dataList.item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemList:{
        backgroundColor:'#FF969C',
        padding:10,
        margin:5
    },
    textItemList:{
        color:"#000000",
        fontSize:18
    }
});

export default ListItem;