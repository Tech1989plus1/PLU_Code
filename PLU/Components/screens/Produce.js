import React, { Component } from "react";
import {View,Text,StyleSheet, SafeAreaView, TextInput, FlatList, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem} from "react-native-elements";
import _ from 'lodash';

import {contact as PLU} from '../../db';
import {contains} from '../API/cotains';

class Produce extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: PLU,
            fulldata: PLU,
            query: '',
        }
    }

    updateQuery = query => {
        const formatQuery = query.toLowerCase();
        const data = _.filter(this.state.fulldata, user => {
            return contains(user, formatQuery);
        })
        
        this.setState({query: formatQuery, data});
      };

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            roundAvatar
            leftAvatar={{ source: {uri: `${item.image}`}}}
            title = {item.first_name + " " + item.last_name}
            subtitle = {"PLU: " + item.phone_number} 
        />
    );
    
    renderSepartor = () => {
        return (
            <View style = {{height: 1, width: '86%', backgroundColor: '#CED0CE', marginLeft: "17%"}}/>
        );
    }

    render() {
        let reduceData = this.state.data;
        //console.log(this.state);
        return (
            <SafeAreaView style = {{flex: 1}}>
                <View style = {{flex: 1}}>
                    <View style = {styles.container}>
                        <View style = {styles.containerTop}>
                            <Icon name = 'ios-search' size = {20} style = {{padding: 10, color: '#4c9ed9'}}/>
                            <TextInput
                                placeholder = 'Search Produce List...'
                                placeholderTextColor = '#b6babf'
                                onChangeText={this.updateQuery}
                                style = {styles.inputView}
                            />
                        </View>
                    </View>
                        <ScrollView>
                            <FlatList
                                keyExtractor = {this.keyExtractor}
                                data={this.state.data}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent = {this.renderSepartor}
                            />
                        </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Produce;

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    inputView: {                       
        flex: 1, 
        fontWeight: '700', 
        backgroundColor: 'white',
        padding: 10                        
    },
    containerTop: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2
    }
});