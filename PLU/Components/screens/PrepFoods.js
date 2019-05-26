import React, { Component } from "react";
import {View,Text,StyleSheet, SafeAreaView, TextInput, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import PreparedList from '../list/PreparedList'

class PreFoods extends Component {
    render() {
        return (
            <SafeAreaView style = {{flex: 1}}>
                <View style = {{flex: 1}}>
                    <View style = {styles.container}>
                        <View style = {styles.containerTop}>
                            <Icon name = 'ios-search' size = {20} style = {{padding: 10, color: '#4c9ed9'}}/>
                            <TextInput
                                placeholder = 'Search Prepared Foods List...'
                                placeholderTextColor = '#b6babf'
                                style = {styles.inputView}
                            />
                        </View>
                    </View>
                        <ScrollView>
                            <PreparedList/>
                        </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default PreFoods;

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