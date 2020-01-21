import React,{useState,useEffect} from 'react'
import {View, StyleSheet,StatusBar} from 'react-native'

import ListingFlatList from '../components/ListingFlatList'

import { useSelector, useDispatch} from 'react-redux'

import {ChangeDisplayListing,autoFetchListings,userOwnListingsFetch,userLikedListingFetch,outStockListingsFetch,fetchCartListingsAction} from '../redux/actions'


const Home = props =>{
    const dispatch = useDispatch()

    const listings = useSelector(state => state.first.fetched_listings)
    const user = useSelector(state => state.first.currentUser)
    
    const handlePress = listingProps =>{
        const listing = listingProps
        dispatch(ChangeDisplayListing(listing))
        props.navigation.navigate('ListingShow')   
    }
    
    useEffect(()=>{
        dispatch(autoFetchListings())
        dispatch(userOwnListingsFetch(user.id))
        dispatch(userLikedListingFetch(user.id))
        dispatch(fetchCartListingsAction(user.id))
        dispatch(outStockListingsFetch())
    },[])

    return(

        <View style={styles.home}>
            <StatusBar barStyle="dark-content" />
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
        // paddingTop:50,
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