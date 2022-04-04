import react from "react";
import { 
    StyleSheet, 
    Text,  
    FlatList
} from 'react-native';
import ListItem from "./ListItem";

const IndexListItem = (props) => {

    const {onHandlerModal, itemList} = props

    const renderItem = data => <ListItem dataList={data} key={data.item.id} onPressHandler={onHandlerModal.bind(this, data.item.id)}/>
    //console.log(data);
    return (
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({

});

export default IndexListItem;