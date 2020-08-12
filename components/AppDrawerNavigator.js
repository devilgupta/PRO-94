import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import {AppTabNavigator} from './AppTabNavigator';
//import SettingScreen from '../screens/SettingScreen';
//import NotificationScreen from '../screens/NotificationScreen';
//import MyDonationScreen from '../screens/MyDonationsScreen';
import {Icon} from 'react-native-elements';
//import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';

export const AppDrawerNavigator= createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
        navigationOptions:{
            drawerIcon:<Icon name="home" type="fontawesome5"/>
        }
    },

    /*Notifications:{
        screen:NotificationScreen,
        navigationOptions:{
            drawerIcon:<Icon name="bell" type="font-awesome"/>,
            drawerLabel:"Notifications"
        }
    },
    Setting:{
        screen:SettingScreen,
        navigationOptions:{
            drawerIcon:<Icon name="Settings" type="fontawesome5"/>,
            drawerLabel:"Settings"
        }
    },
    MyDonations:{
    screen:MyDonationScreen,
    navigationOptions:{
        drawerIcon:<Icon name="gift" type="font-awesome"/>,
        drawerLabel:"My Donations"
    }
},
MyRecievedBooks:{
    screen:MyReceivedBooksScreen,
    navigationOptions:{
        drawerIcon:<Icon name="gift" type="font-awesome"/>,
        drawerLabel:"My Recieved Booksw"
    }
},*/
},
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:'Home'
})