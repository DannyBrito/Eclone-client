import React from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ListingFlatList from '../components/ListingFlatList'
import { useSelector, useDispatch} from 'react-redux'

import {ChangeDisplayListing} from '../redux/actions'

import {random_image} from '../constants/links'
const UserProfile = props =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.first.currentUser)
    const data = useSelector(state => state.first.own_listings)
    
    const handlePress = listingProps =>{
        const {url,...listing} = listingProps
        dispatch(ChangeDisplayListing(listing))
        props.navigation.navigate('ListingShow')
    }
    // console.log(data)
    return(
        <View style={styles.container}>

            <View style={styles.titleBox}>
    <Text style={styles.title}>{user.username[user.username.length-1] === 's'? user.username + '\'':user.username +'\'s'} Profile {data.length}</Text>
            </View>
                
            <View style={styles.contentBox}>
                <Image style={styles.image} source={{uri:random_image}}/>
                <Text style={styles.content}>{user.bio? user.bio :`${user.username} does not have a bio yet`}</Text>
            </View>
            <View style={styles.spacing}></View>
            <View style={styles.Listing}>
            {!data.length ?<Text>No listings for this user</Text> :
            <ListingFlatList data={data} handlePress={handlePress}/>}
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
        minHeight:300,
        // borderColor:'red',
        // backgroundColor:'red',
        borderBottomColor:'black',
        borderBottomWidth:0.2  
    },
    content:{
        fontSize:20,
        color:'grey',
        textAlign:'center'
    },spacing:{
        height:15,
        backgroundColor:'#dedede'
    },
    Listing:{
        borderTopColor:'black',
        borderTopWidth:0.2,
        flex:2,
        // paddingHorizontal:30,
        paddingLeft:35
    }
})

export default UserProfile;