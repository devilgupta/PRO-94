import React from 'react';
import {Text,View, StyleSheet,TouchableOpacity,FlatList,KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { ListItem,Icon } from 'react-native-elements';

export default class OrderingScreen extends React.Component{

    constructor(){
        super()
        this.state={
            itemName:"",
            availability:false,
            extraInfo:"",
            price:0,
            quantity:0,
            showFlatlist:false,
            dataSource:"",
            renderItem:"",

        }
    }

    /*fetchInformation=()=>{
        db.collection('current_orders').where('Item_name','==',itemName).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    itemName:data.Item_name,
                    availability:data.available,
                    extraInfo:data.extra,
                   price:data.price,
                    quantity:data.quantity,
                })
            })
        })
    }*/


    async getItemsFromApi(itemName){
        this.setState({itemName:itemName})
          if (itemName.length >2){
      
          var items = await ItemSeach.searchitem(itemName,'AIzaSyDp-j0VKsEhVFTuTAaotIImCZbS5MMLeGc')
          this.setState({
            dataSource:item.data,
            showFlatlist:true
          })
        }}
        componentWillMount(){
            this.getItemsFromApi();
        }

keyExtractor = (item,index)=>index.toString()
        renderItem = ({item,i})=>(
            <ListItem
            key={index}
            title={item.item_name}
            subtitle={item.availability,item.price}
            leftElement={<Icon name="burger" type="font-awesome" color="grey"/>}
            titleStyle={{color:'black', fontWeight:'bold'}}
            bottomDivider
            />
        )

   


    render(){
        return(
            <View style={{backgroundColor:'#1ba100', paddingBottom:10,margin:3, borderWidth:3, borderRadius:18}}>
            <View style={styles.viewOfHeader}>
                <Text style={styles.headerStyle}>The Dauntless Food Delivery App!!</Text>
            </View>
            <View>
                {this.state.showFlatlist ?
               ( <FlatList 
                data={this.state.dataSource}
                renderItem={this.renderItem}
                enableEmptySections={true}
                style={{ marginTop: 10 }}
                keyExtractor={(item, index) => index.toString()}/>)
               :(
                    <Text style={{
                        margin:10,
                        color:'grey',
                        justifyContent:'center',
                        alignItems:'center',
                        fontSize:15,
                        fontWeight:'bold'

                    }}>
                       No current orders available! Check back later
                    </Text>
               )
            }
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
    }
})
