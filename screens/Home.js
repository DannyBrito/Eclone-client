import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'

import {URL_BASE,headers} from '../constants/links'

import Card from '../components/Card'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = props =>{
    const [timer,setTimer] = useState(1)
    const [listings,setListings] = useState([])

    const handlePress = id =>{
        props.navigation.navigate('ListingShow',{id})
        // console.log(id)
    }
    useEffect(()=>{
        fetch(URL_BASE + `listings`)
            .then(res=>res.json())
            .then(res => setListings(res))
            .catch(console.log)
    },[])

    // console.log(listings)
    return(
        // <ScrollView>
        <View style={styles.home}>
            {/* {listings.map((listing)=><Card key={listing.id} {...listing} url='https://source.unsplash.com/random'/>)}   */}
            <FlatList style={styles.list}columnWrapperStyle={2} horizontal={false} numColumns={2}
                data={listings}
                renderItem={({item})=><Card handlePress={handlePress} {...item} url='https://source.unsplash.com/random'/>}
                keyExtractor={item => `${item.id}`}
            />
        </View>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    home:{
        // backgroundColor:'blue',
        flex:1,
        paddingHorizontal:10,
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