import React, { useState } from 'react'
import {View, Text, StyleSheet,Image, Button} from 'react-native'
import ListingFlatList from '../components/ListingFlatList'
import { useSelector, useDispatch} from 'react-redux'
import {ButtonGroup,Divider} from 'react-native-elements'
import {ChangeDisplayListing} from '../redux/actions'

import {random_image} from '../constants/links'
const UserProfile = props =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.first.currentUser)
    const liked = useSelector(state => state.first.liked_listings)
    const own = useSelector(state => state.first.own_listings)

    const [selectedIndex,setSelectedIndex] = useState(0)
    const buttons =['Selling','Favorites']

    const [showLiked, setShowLiked]= useState(false)
    const handlePress = listingProps =>{
        const {url,...listing} = listingProps
        dispatch(ChangeDisplayListing(listing))
        props.navigation.navigate('ListingShow')
    }
    // console.log(data)
    return(
        <View style={styles.container}>

            <View style={styles.titleBox}>
    <Text style={styles.title}>{user.username[user.username.length-1] === 's'? user.username + '\'':user.username +'\'s'} Profile</Text>
            </View>
                
            <View style={styles.contentBox}>
                <Image style={styles.image} source={{uri:random_image}}/>
                <Text style={styles.content}>{user.bio? user.bio :`${user.username} does not have a bio yet`}</Text>
            </View>
            {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
            <View style={styles.spacing}>
            <ButtonGroup
            disabled={[]}
                onPress={setSelectedIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.buttonBox}
            />
            </View>
            <View style={styles.Listing}>
            {selectedIndex === 1 ?<ListingFlatList data={liked} handlePress={handlePress}/>:<ListingFlatList data={own} handlePress={handlePress}/>}
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
        minHeight:275,
        // borderColor:'red',
        // backgroundColor:'red',
        borderBottomColor:'black',
        // borderBottomWidth:0.2  
    },
    content:{
        fontSize:20,
        color:'grey',
        textAlign:'center'
    },spacing:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        backgroundColor:'#dedede'
    },
    buttonBox:{
        height:40,
        width:300,
        // alignSelf:'center',
        // pad
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