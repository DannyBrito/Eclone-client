import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet,Image, ScrollView, FlatList} from 'react-native'

import ListingFlatList from '../components/ListingFlatList'

import { useSelector, useDispatch} from 'react-redux'

import {ChangeDisplayListing} from '../redux/actions'

import {autoFetchListings,userOwnListingsFetch,userLikedListingFetch} from '../redux/actions'



import { Input} from 'react-native-elements'





const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
       icon: 'remove-shopping-cart'
    },
    {
       name: 'nuts',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
       icon: 'av-timer'
    },
   ]
const Playground = props =>{
        const [searchQuery,setSearchQuery] = useState('')
    return(

        <View style={styles.home}>
          <Input errorMessage="thes required" label="title" value="lol"/>
        </View>

    )
}

const styles = StyleSheet.create({
    user:{
        flexDirection:'row',
        paddingVertical:5,
        justifyContent:'space-around'
    },
    home:{
        // backgroundColor:'blue',
        flex:1,
        // paddingHorizontal:30,
        // paddingLeft:30,
        // paddingTop:50,
        // alignItems:'center',
        // alignContent:'space-between',
        // flexDirection:'row',
        justifyContent:'center',
        // flexWrap:'wrap'
    },
    image:{
    height:30,
    width:30

}
})

export default Playground;