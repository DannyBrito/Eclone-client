import React from 'react'
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import {random_image} from '../constants/links'

const Card = props =>{
    return(
        <View style={{...styles.card,...props.style}}>
            <TouchableOpacity onPress={() => props.handlePress(props)}>
                <Image  style={styles.image} source={{uri:random_image}} />
            </TouchableOpacity>
            <Text style={styles.titleX}>${props.price}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        padding:10,
        // backgroundColor:'blue',
        borderWidth:1,
        borderRadius:20,
        width:175,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        // flex:1,
        alignItems:'center',
        // alignContent:'space-around',
        justifyContent:'center',
        // flexDirection:'row',
        marginVertical:10,
    },
    image:{
        // marginVertical: 5,
        width:150,
        height:150,
        borderRadius:20,
        borderWidth:2.5,
        borderColor:'black'
        
    },
    title:{
        paddingTop:1,
        // alignSelf:"center",
        color:'black',
        maxWidth:150,
        maxHeight:70
    },
    titleX:{
        // paddingTop:10,
        // alignSelf:"center",
        color:'black',
        fontSize:25,
        fontWeight:'bold'
        // maxWidth:150,
        // maxHeight:70
    }
})

export default Card;