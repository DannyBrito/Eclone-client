import React from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ListingFlatList from '../components/ListingFlatList'
import { useSelector, useDispatch} from 'react-redux'

import {random_image} from '../constants/links'
const UserProfile = props =>{
    const dispatch = useDispatch()
    const data = useSelector(state => state.first.data)
    
    const handlePress = id =>{
        dispatch({type:"CHANGE_DISPLAY_LISTING_ID",payload:id})
        props.navigation.navigate('ListingShow')
    }
    return(
        <View style={styles.container}>

            <View style={styles.titleBox}>
                <Text style={styles.title}>User's Profile</Text>
            </View>
                
            <View style={styles.contentBox}>
                <Image style={styles.image} source={{uri:random_image}}/>
                <Text style={styles.content}>BioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBio</Text>
            </View>

            <View style={styles.Listing}>
            <ListingFlatList data={data} handlePress={handlePress}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:2,
    },image:{
        height:200,
        width:200,
        alignSelf:'center',
        borderRadius:20,
        borderColor:'black',
        borderWidth:2,
        marginBottom:20,
    },
    titleBox:{
        height:100,
        // backgroundColor:'black',
        paddingTop:50,
        // alignSelf:'center'

    },
    title:{
        fontSize:30,
        color:'green',
        textAlign:'center'
        
    },
    contentBox:{
        paddingVertical:0,
        paddingHorizontal:30,
        // height:100,
        // borderColor:'red',
        // backgroundColor:'red',
        borderBottomColor:'grey',
        borderBottomWidth:0.2  
    },
    content:{
        fontSize:20,
        color:'grey',
        textAlign:'center'
    },
    Listing:{
        flex:2,
        // paddingHorizontal:30,
        paddingLeft:35
    }
})

export default UserProfile;