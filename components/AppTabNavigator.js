import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ContactingScreen from '../screens/ContactingScreen';
import OrderingScreen from '../screens/OrderingScreen';

export const AppTabNavigator = createBottomTabNavigator({
    Order_here:{
        screen:OrderingScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/orderhere.jpg')}
            style={{
                width:40,
                height:20
            }}></Image>,
            tabBarLabel:"Order"
        }
    },
    Contact_us:{
        screen:ContactingScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/contactus.png')}
            style={{
                width:20,
                height:20
            }}></Image>,
            tabBarLabel:"Contact Us/Logout"
        }
    }
})