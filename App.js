import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import firebase from 'firebase';
import db from './config';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

import ContactingScreen from './screens/ContactingScreen';
import OrderingScreen from './screens/OrderingScreen';
import LoginScreen from './screens/LoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator';

export default class App extends React.Component {
  render(){
  return (
      <AppContainer/>
  );
  }
}

const SwitchNavigator=createSwitchNavigator({
  Welcome_Screen:{screen:LoginScreen},
  //BottomTab:{screen:AppTabNavigator}
  Drawer:{screen:AppDrawerNavigator}

})

const AppContainer=createAppContainer(SwitchNavigator);
