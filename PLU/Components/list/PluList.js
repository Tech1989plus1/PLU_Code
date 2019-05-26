import React, { Component } from "react";
import {View,StyleSheet, FlatList} from "react-native";
import {Container, Content} from 'native-base';
//import Icon from 'react-native-vector-icons/Ionicons';
import {List, ListItem, Icon} from 'react-native-elements';

class PluList extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.produceData,
        }
    }
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            roundAvatar
            leftAvatar={{ source: {uri: `${item.image}`}}}
            title = {item.first_name + " " + item.last_name}
            subtitle = {"PLU: " + item.phone_number} 
        />
    )
    renderSepartor = () => {
        return (
            <View style = {{height: 1, width: '86%', backgroundColor: '#CED0CE', marginLeft: "17%"}}/>
        );
    }
    render(){
        console.log(this.state);
        return(
            <FlatList
                keyExtractor = {this.keyExtractor}
                data={this.state.data}
                renderItem={this.renderItem}
                ItemSeparatorComponent = {this.renderSepartor}
            />
        );
    }
}
export default PluList;