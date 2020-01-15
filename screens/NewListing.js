import React, { useState } from 'react'
import {View, Text, StyleSheet,Button,TouchableWithoutFeedback,Keyboard, Alert} from 'react-native'
import InputLabel from '../components/InputLabel'
import {POST_CONF,URL_BASE} from '../constants/links'

const NewListing = props =>{
    const[title,setTitle] = useState('')
    const[condition,setCondition] = useState('')
    const[description,setDescription] = useState('')
    const[price,setPrice] = useState('')

    const handleSubmit = ()=> {
        if(title && condition && description && price){
        const body = JSON.stringify({listing:{title,condition,description,price}})
        const Config ={...POST_CONF,body}
        fetch(URL_BASE +`users/6/listings`,Config)
        .then(res => res.json())
        .then(console.log)

        // if need to navigate somewhere
        // props.navigation.navigate('Home')
        }
        else{
        Alert.alert('Missing a required field')
        }
        setTitle('')
        setCondition('')
        setDescription('')
        setPrice('')
    }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>

                <Text style={styles.titleListing}>Listing details</Text>

                <InputLabel style={styles.spacing} handleChange={setTitle} value={title} placeholder="Add a Title" title="Title*"/>
                <InputLabel style={styles.spacing} handleChange={setCondition} value={condition} placeholder="Item's condition" title="Condition*"/>
                <InputLabel style={styles.spacing} handleChange={setDescription} value={description} placeholder="Add a Description"title="Description*"/>
                <InputLabel style={{...styles.spacing}} keyboardType='numeric' handleChange={setPrice} placeholder="Item's price" value={price} title="Price*"/>
                <View style={styles.buttonBox}>
                    <Button style={styles.button}  color="blue" title="Post Listing" onPress={handleSubmit}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:40,
        paddingHorizontal:40,
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