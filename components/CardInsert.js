import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CardInsert = props =>{
    return(
        <View style={{...styles.container,...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'white',
        flex:1
    }
})

export default CardInsert;