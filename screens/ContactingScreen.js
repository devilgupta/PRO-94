import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ContactingScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'#1ba100', paddingBottom:10,margin:1, borderWidth:2, borderRadius:18}}>
            <View style={styles.viewOfHeader}>
                <Text style={styles.headerStyle}>The Dauntless Food Delivery App!!</Text>
            </View>
            <View style={styles.phoneNumberStyle}>
                <Text style={styles.phoneNumberTextStyle}>Phone Number:</Text>
                <Text style={styles.phoneNumberTextStyle1}>+91 9971677827</Text>
                <Text style={styles.phoneNumberTextStyle}>Email Address:</Text>
                <Text style={styles.phoneNumberTextStyle1}>shrishtipalette@gmail.com</Text>
                <Text style={styles.phoneNumberTextStyle}>Instagram Handle:</Text>
                <Text style={styles.phoneNumberTextStyle1}>@thedauntlesscook</Text>
                <Text style={styles.phoneNumberTextStyle}>Facebook:</Text>
                <Text style={styles.phoneNumberTextStyle1}>thedauntlesscook</Text>
                <Text style={styles.phoneNumberTextStyle}>Address:</Text>
                <Text style={styles.phoneNumberTextStyle1}>Sector-93B, Noida</Text>
                <View>
                <TouchableOpacity
                style={[styles.button,{marginTop:30}]}
                onPress={()=>{
                 this.props.navigation.navigate('Welcome_Screen')
                firebase.auth().signOut()
                return Alert.alert("Successfully Logged Out")
                }}
                >
                   <Text>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:30}}>
                <Text style={styles.phoneNumberTextStyle3}>Please feel free to contact me at</Text>
                <Text style={styles.phoneNumberTextStyle3}>any time!</Text>
                </View>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    viewOfHeader:{
        marginTop:30,
        backgroundColor:'#2bff00',
        justifyContent:'center',
        alignItems:'center',
        height:70,
        borderRadius:100,
        borderWidth:3,
        borderColor:'yellow',
        marginLeft:10,
        marginRight:10
    },
    headerStyle:{
        fontWeight:'bold',
        fontSize:25,
        fontFamily:'Arial',
        color:'#262617',
        justifyContent:'center'
    },
    phoneNumberStyle:{
        marginTop:20,
        marginLeft:10,
        backgroundColor:'#2bff00',
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'yellow',
        borderRadius:30,
        paddingBottom:10
    },
    phoneNumberTextStyle:{
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'Arial',
        marginTop:10
    },
    phoneNumberTextStyle1:{
        fontSize:20,
        fontFamily:'Arial',
        marginTop:2,
    },
    phoneNumberTextStyle3:{
        fontWeight:'bold',
        fontSize:21,
        fontFamily:'Arial'
    },
    phoneNumberTextStyle4:{
        fontWeight:'bold',
        fontSize:23,
        fontFamily:'Arial',
        marginTop:120,
        alignItems:'center',
        justifyContent:'center',

    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
})