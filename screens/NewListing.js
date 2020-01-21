import React, { useState } from 'react'
import {View,StyleSheet,TouchableWithoutFeedback,Keyboard, Alert, ActionSheetIOS,ActivityIndicator} from 'react-native'
import {POST_FETCH, URL_BASE} from '../constants/links'
import {useSelector,useDispatch} from 'react-redux'
import {addToOwnListings,addToFetchListings,ChangeDisplayListing} from '../redux/actions'
import {Input,Button,Icon,Image,Divider,Text} from 'react-native-elements'


import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const NewListing = props =>{
    const user = useSelector(state => state.first.currentUser)
    const dispatch = useDispatch()

    const[title,setTitle] = useState('')
    const[condition,setCondition] = useState('')
    const[description,setDescription] = useState('')
    const[price,setPrice] = useState('')
    const[photo,setPhoto] = useState(null)
    const[loading,setLoading] = useState(false)


    const imageOptions = () =>{
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options:['Cancel','Take a Picture','Camera Roll','Delete Image'],
                cancelButtonIndex:0,
                destructiveButtonIndex:3,
                title:'Select an Option'
            },
            buttonIndex =>{
                switch(buttonIndex){
                    case 0:
                        return
                    case 1:
                        // console.log('1')
                        return openCamera()
                    case 2:
                        // console.log('2')
                        return openLibrary()
                    case 3:
                        // console.log('3')
                        return setPhoto(null)
                }

            } 
        )
    }

    const openCamera = async () =>{
        await Permissions.askAsync(Permissions.CAMERA)
        const {cancelled,uri} = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        if(!cancelled) return setPhoto(uri)
    }

    const openLibrary = async () =>{
        await Permissions.askAsync(Permissions.CAMERA_ROLL)
        const {cancelled,uri} = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1
        });
        if(!cancelled) return setPhoto(uri)
    }

    const handleSubmit = ()=> {
        Keyboard.dismiss()
        if(title && condition && description && price){
            let formData = new FormData();
            const modprice = parseFloat(price).toFixed(2)
            if(photo){
                // need to check if this is going by reference
                let localUri = photo;
                let filename = localUri.split('/').pop();
              
                // Infer the type of the image
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;
              
                // Upload the image using the fetch and FormData APIs
                  formData.append('photo', { uri: localUri, name: filename, type })
            }

            formData.append('listing',JSON.stringify({title,condition,description,price:modprice}))
            setLoading(true)
            fetch(URL_BASE+`users/${user.id}/listings`,{
                method: 'POST',
                headers: {
                'content-type': 'multipart/form-data',
                },
                body: formData,
            })
            .then(res =>res.json())
            .then(res => {
                dispatch(addToOwnListings(res))
                // dispatch(addToFetchListings(res))
                dispatch(addToFetchListings(res))
                dispatch(ChangeDisplayListing(res))
                setLoading(false)
                props.navigation.navigate('ListingShow')
            })
        }
        else{
        Alert.alert('Missing a required field')
        }
        setTitle('')
        setCondition('')
        setDescription('')
        setPrice('')
        setPhoto(null)
    }
    console.log(photo)
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text h2>Create New Listing</Text>
            </View>
            <Divider />
                <View style={styles.container}>

                <Input errorMessage="required" label="Title *" placeholder="Add a Title" onChangeText={setTitle}  value={title} />
                <Input errorMessage="required" label="Condition *" placeholder="Item's Condition" onChangeText={setCondition} value={condition} />
                <Input errorMessage="required" label="Description *" placeholder="Add a Description" onChangeText={setDescription} value={description} />
                <Input errorMessage="required" keyboardType='numeric' label="Price *" placeholder="Add a Price" onChangeText={setPrice} value={price} />
                <View style={styles.cameraBox}>
                <Button type='clear' onPress={imageOptions} title="Picture " iconLeft icon={
                <Icon name={photo?"check-circle-outline":"image-plus"} type='material-community' size={30} color="#2089dc"/>} />
                </View>
                <View style={styles.submitBox}>
                <Button  onPress={handleSubmit} loading={loading} title="Create Listing" />
                </View>
                {photo && 
                <View style={styles.cameraBoxd}>
                    <Text  style={{fontWeight:'500',fontSize:20,marginBottom:4,color:'#2089dc'}}>Preview:</Text>
                    <Image
                    source={{ uri: photo }}
                    style={{ width: 150, height: 150}}
                    PlaceholderContent={<ActivityIndicator />}
                    />
                </View>}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        // backgroundColor:'red',
    },headerContainer:{
        flex:1,
        flexDirection:"column-reverse",
        paddingLeft:35
        // backgroundColor:'green',
    },
    container:{
        flex:5,
        // justifyContent:'center',
        paddingVertical:40,
        paddingHorizontal:40,
        // backgroundColor:'blue'
    },
    cameraBox:{
        // marginTop:10,
        // marginLeft:10,
        height:45,
        width:150,
        // backgroundColor:'black',
        justifyContent:'center',
        marginBottom:20,
    },
    submitBox:{
        marginBottom:20,
    },
    titleListing:{
        paddingVertical:10,
        fontSize:40,
        alignSelf:'center',
        fontWeight:'bold'
    },
    spacing:{
        paddingVertical:20,
    },
    buttonBox:{
        height:100,
        // backgroundColor:'black',
        // alignSelf:'center',
        borderRadius:10,
    },
    button:{
        flex:1,
        borderRadius:4,       
        borderWidth:1.5,
        borderColor:'black',
    }
})

export default NewListing;