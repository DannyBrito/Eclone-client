import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {random_image} from '../constants/links'
import { ScrollView } from 'react-native-gesture-handler'

import {deleteListingFromCartAction,buyInCartAction} from '../redux/actions'

const CartCheckOut = props =>{

    const dispatch = useDispatch()
    const listings = useSelector(state=> state.first.user_in_cart_listings)
    const cart_total = useSelector(state=> state.first.cart_total)
    const user = useSelector(state=> state.first.currentUser)

    const handleBuy = () =>{
        dispatch(buyInCartAction(user.id))
        .then(res => {
            if(!res.unavalible_listings_ids.length){
                Alert.alert("All Items where succesfully\nPurchased")
            }
            else{
                const msg = res.unavalible_listings_ids.map((listing,index) =>`${index+1}. ${listing.title}`).join('\n').trim()
                Alert.alert("Some items in your cart are no longer available:",msg+`\nNew Total Payment: $${res.total}`)
            }
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Your Cart</Text>
            </View>
            <ScrollView style={styles.mainCard}>
            {
                listings.map(listing => 
                    <ListItem containerStyle={styles.item}
                    // checkmark={true}
                    key={listing.cart_id}
                    leftAvatar={{ source: { uri: random_image } }}
                    title={listing.title}
                    subtitle={`$${listing.price}`}
                    rightIcon={{ name: 'remove-shopping-cart',onPress:()=>dispatch(deleteListingFromCartAction(listing.cart_id))}}
                    bottomDivider
                    />
                )
            }
            </ScrollView>
            <View style={styles.Box}>
            <Card containerStyle={styles.confirmBox}title={`Total:  $${cart_total}`}><Button title="BUY" onPress={handleBuy}/></Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // paddingTop:,
        flex:1,
        // justifyContent:'center'
    },
    title:{
        fontSize:50,
        alignSelf:'center'
    },
    titleBox:{
        paddingTop:50,
        height:125,
        // backgroundColor:'blue',
    },
    mainCard:{
        // backgroundColor:'black',
        maxHeight:485,
        paddingHorizontal:20,
        paddingTop:5,
        // width:100
    },
    item:{
        // flex:1,
        borderColor:'grey',
        borderWidth:0.2
        // flexDirection:'row'
    },
    confirmBox:{
        borderColor:'grey',
        borderWidth:0.4
        // height:1000,
    },
    Box:{
        paddingHorizontal:5
    }
})

export default CartCheckOut;