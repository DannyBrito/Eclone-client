import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet,Image, ScrollView, FlatList} from 'react-native'
import ListingFlatList from '../components/ListingFlatList'
import { useSelector, useDispatch} from 'react-redux'
import {ChangeDisplayListing} from '../redux/actions'
import {autoFetchListings,userOwnListingsFetch,userLikedListingFetch} from '../redux/actions'
import { Input,Button} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { URL_BASE } from '../constants/links'


const Playground = props =>{

        const handlePress = async () =>{
            await Permissions.askAsync(Permissions.CAMERA_ROLL)
            const {cancelled,uri} = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            });
            if(!cancelled){
                let localUri = uri;
                let filename = localUri.split('/').pop();
              
                // Infer the type of the image
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;
              
                // Upload the image using the fetch and FormData APIs
                let formData = new FormData();
                  formData.append('photo', { uri: localUri, name: filename, type })
                console.log(formData)   
            }
            //       formData.append('listing',JSON.stringify({
            //           title:'test',
            //           price:49.91,
            //           description:'jhejrejr'
            //       }))
            //     // Assume "photo" is the name of the form field the server expects
            //     // formData.append('uri',localUri)
            //     // formData.append('name',filename)
            //     // formData.append('type', type);
              
            //     return await fetch(URL_BASE+'testing', {
            //       method: 'POST',
            //       headers: {
            //         'content-type': 'multipart/form-data',
            //       },
            //       body: formData,
            //     }).then(res => res.json())
            //     .then(console.log)
            // }
        } 

    return(

        <View style={styles.home}>
            <View style={styles.box}>
            <Button title="ADD IMAGE" onPress={handlePress}/>
            </View>
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
    box:{
        marginHorizontal:20,
    }
})

export default Playground;