import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'

import ListingFlatList from '../components/ListingFlatList'

import { useSelector, useDispatch} from 'react-redux'

import {ChangeDisplayListing} from '../redux/actions'

import {autoFetchListings,userOwnListingsFetch} from '../redux/actions'

import {POST_FETCH} from '../constants/links'

const Home = props =>{
    const dispatch = useDispatch()

    const listings = useSelector(state => state.first.fetched_listings)
    const user = useSelector(state => state.first.currentUser)
    
    const handlePress = listingProps =>{
        const {url,...listing} = listingProps
        dispatch(ChangeDisplayListing(listing))
        props.navigation.navigate('ListingShow')
        
    }
    
    useEffect(()=>{
        dispatch(autoFetchListings())
        dispatch(userOwnListingsFetch(user.id))
    },[])
    return(

        <View style={styles.home}>
        
            {/* <FlatList style={styles.list}columnWrapperStyle={2} horizontal={false} numColumns={2}
                data={listings}
                renderItem={({item})=><Card handlePress={handlePress} {...item} url='https://source.unsplash.com/random'/>}
                keyExtractor={item => `${item.id}`}
            /> */}
            <ListingFlatList data={listings} handlePress={handlePress}/>
        </View>

    )
}

const styles = StyleSheet.create({
    home:{
        // backgroundColor:'blue',
        flex:1,
        // paddingHorizontal:30,
        paddingLeft:30,
        paddingTop:50,
        // alignItems:'center',
        // alignContent:'space-between',
        // flexDirection:'row',
        justifyContent:'center',
        // flexWrap:'wrap'
    },
    list:{
        flex:1,
        // backgroundColor:'black',
        // alignSelf:'center'
    }
})

export default Home;