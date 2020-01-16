import React, { useState } from 'react'
import {View, Text, StyleSheet,Button,TouchableWithoutFeedback,Keyboard, Alert} from 'react-native'
import InputLabel from '../components/InputLabel'
import {POST_FETCH} from '../constants/links'
import {useSelector,useDispatch} from 'react-redux'
import {addToOwnListings,addToFetchListings} from '../redux/actions'

const NewListing = props =>{
    const user = useSelector(state => state.first.currentUser)
    const dispatch = useDispatch()

    const[title,setTitle] = useState('')
    const[condition,setCondition] = useState('')
    const[description,setDescription] = useState('')
    const[price,setPrice] = useState('')

    const handleSubmit = ()=> {
        if(title && condition && description && price){
            const modprice = parseFloat(price).toFixed(2)
            POST_FETCH(`users/${user.id}/listings`,
            {listing:{title,condition,description,price:modprice}})
            .then(res => {
                dispatch(addToOwnListings(res))
                dispatch(addToFetchListings(res))
            })
        }
        else{
        Alert.alert('Missing a required field')
        }
        setTitle('')
        setCondition('')
        setDescription('')
        setPrice('')
    }
    // console.log(user)
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