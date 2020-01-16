import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const InputLabel = props =>{
    return(
        <View style={{...styles.container,...props.style}}>
            <Text style={{...styles.text,...props.title_style}}>{props.title}</Text>
            <TextInput keyboardType={props.keyboardType} style={{...styles.input}}value={props.value} onChangeText={props.handleChange} placeholder={props.placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
    },
    text:{
        fontSize:20,
        paddingBottom:10,
        // color:'blue'
    },
    input:{
        height:30,
        // width:350,
        // maxWidth:400,
        borderWidth:1.5,
        borderColor:'black',
    }
})

export default InputLabel;