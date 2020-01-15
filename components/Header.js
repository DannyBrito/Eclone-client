import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = props =>{
    return(
        <View style={styles.header}>
            <Text style={styles.titlex}>👤</Text>
            <View style={styles.title}>
            <Text   style={{color:'white', alignSelf:'center',fontSize:40,backgroundColor:'green'}} onPress={()=>console.log('pressed')}>{props.title}</Text>
            </View>
            <Text style={styles.titlex}>💀</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 90,
        paddingTop: 40,
        backgroundColor: 'black',
        flexDirection:'row',
        // justifyContent:'center'
    },
    title:{
        flex:4,
        // backgroundColor:'blue',
        color: 'white',
        fontSize: 35,
        // paddingLeft:40,
        textAlign:'center'
    },
    titlex:{
        flex:1,
        backgroundColor:'blue',
        color: 'white',
        paddingLeft:20,
        fontSize: 35,
        // textAlign:'center'
        // justifyContent:'center'
    }
})

export default Header;