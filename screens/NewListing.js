import React, { useState } from 'react'
import {View, Text, StyleSheet,Button,TouchableWithoutFeedback,Keyboard} from 'react-native'
import InputLabel from '../components/InputLabel'

const NewListing = props =>{
    const[title,setTitle] = useState('')
    const[condition,setCondition] = useState('')
    const[description,setDescription] = useState('')
    const[price,setPrice] = useState('')

    const handleSubmit = ()=> {
        console.log('')
    }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>

                <Text style={styles.titleListing}>Listing details</Text>

                <InputLabel style={styles.spacing} handleChange={setTitle} value={title} placeholder="Add a Title" title="Title:"/>
                <InputLabel style={styles.spacing} handleChange={setCondition} value={condition} placeholder="Item's condition" title="Condition:"/>
                <InputLabel style={styles.spacing} handleChange={setDescription} value={description} placeholder="Add a Description"title="Description:"/>
                <InputLabel style={{...styles.spacing}} keyboardType='numeric' handleChange={setPrice} placeholder="Item's price" value={price} title="Price:"/>
                <Button title="Post Listing" onPress={handleSubmit}/>
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
    }
})

export default NewListing;