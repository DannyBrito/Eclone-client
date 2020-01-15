import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'

import {URL_BASE,headers} from '../constants/links'

import ListingFlatList from '../components/ListingFlatList'

import Card from '../components/Card'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useSelector, useDispatch} from 'react-redux'

const Home = props =>{
    const dispatch = useDispatch()
    const [timer,setTimer] = useState(1)
    const [listings,setListings] = useState([])

    const handlePress = id =>{
        dispatch({type:"CHANGE_DISPLAY_LISTING_ID",payload:id})
        props.navigation.navigate('ListingShow')

        // console.log(id)
    }
    useEffect(()=>{
        fetch(URL_BASE + `listings`)
            .then(res=>res.json())
            .then(res => {
                setListings(res)
                dispatch({type:'FETCH_LISTINGS',payload:res})
            })
            .catch(console.log)
    },[])

    // console.log(listings)
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