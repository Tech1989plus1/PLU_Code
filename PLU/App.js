/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Bulk from './Components/screens/Bulk';
import Saved from './Components/screens/Saved';
import Produce from './Components/screens/Produce';
import PreFoods from './Components/screens/PrepFoods';


export default createBottomTabNavigator({
  Produce:{
    screen: Produce,
    navigationOptions: {
      tabBarLabel: 'PRODUCE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-nutrition" color={tintColor} size={24} />
      )
    } 
  },
  Bulk:{
    screen: Bulk,
    navigationOptions: {
      tabBarLabel: 'BULK',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-basket" color={tintColor} size={24} />
      )
    }
  },
  PreFoods:{
    screen: PreFoods,
    navigationOptions: {
      tabBarLabel: 'PREPARED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-pizza" color={tintColor} size={24} />
      )
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-save" color={tintColor} size={24} />
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor: 'green',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});
  
const styles = StyleSheet.create({
  bottomTabNav: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    shadowOffset: { width: 5, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
   elevation: 5
  },
});
