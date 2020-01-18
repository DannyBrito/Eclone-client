import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {random_image} from '../constants/links'
import { ScrollView } from 'react-native-gesture-handler'
const CartCheckOut = props =>{

    const dispatch = useDispatch()
    const listings = useSelector(state=> state.first.liked_listings)
    return(
        <View style={styles.container}>

            <ScrollView style={styles.mainCard}>
            {
                listings.map(listing => 
                    <ListItem style={styles.item}
                    // checkmark={true}
                    key={listing.id}
                    leftAvatar={{ source: { uri: random_image } }}
                    title={listing.title}
                    rightIcon={{ name: 'remove-shopping-cart',onPress:()=>console.log('here') }}
                    bottomDivider
                    />
                )
            }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // padding:50,
        flex:1,
        justifyContent:'center'
    },
    mainCard:{
        maxHeight:600,
        // width:100
    },
    item:{
        flex:1
    },
})

export default CartCheckOut;