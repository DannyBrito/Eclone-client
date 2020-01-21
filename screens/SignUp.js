import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView,ImageBackground, TextInput,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native'

import CardInsert from '../components/CardInsert'

import {URL_BASE,POST_CONF} from '../constants/links'
import SignUpForm from '../components/SignUpForm'

import {SetCurrentUser} from '../redux/actions'
import { useSelector, useDispatch} from 'react-redux'



const SignUp = props =>{
    const dispatch = useDispatch()

    const handleChange = () =>{
        props.navigation.goBack()
    }
    const handleSubmit =(username,password)=>{
        username = username.trim()
        
        const body= JSON.stringify({user:{username,password}})
        const config ={...POST_CONF,body}
        fetch(URL_BASE + `users`,config)
            .then(res => res.json())
            .then(res =>{
                if(res.message) throw res.message
                else{
                    dispatch(SetCurrentUser(res.user))
                    Keyboard.dismiss()
                    props.navigation.navigate('Home')
                }
            })
            .catch(error => Alert.alert(error))
    }

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Signup.jpg')} style={{width: '100%', height: '100%'}} style={{...styles.container,...props.style}}>
                    
                    <View style={styles.MainTitle}>
                        <Text style={styles.MainTextTitle}>Welcome</Text>
                    </View>

                    <View style={styles.SubTitle}>
                        <Text style={styles.SubTitleText}>Sign-Up</Text>
                    </View>

                    <CardInsert style={{flex:6}}>
                        {/* <ScrollView maintainVisibleContentPosition={{minIndexForVisible:0,contentOffset:'viseble'}}>   */}
                        <SignUpForm handleChange={handleChange} toggleLogSign={props.toggleLogSign} handleSubmit={handleSubmit} style={{flex:6}}/>
                        {/* </ScrollView> */}
                    </CardInsert>

                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
        // padding:16,
        // alignItems:'center',
        // backgroundColor:'black'
        // alignContent:'space-between',
        // flexDirection:'row',
        // justifyContent:'space-around',
        // flexWrap:'wrap'
    },
    MainTitle:{
        justifyContent:'center',
        alignItems:'center',
        flex:2,
        // backgroundColor:'green',
    },
    MainTextTitle:{
        fontSize:50,
        color:'white',
        // shadowColor:'black',
        // shadowRadius:6,
        fontWeight:'bold',
        // backgroundColor:'blue',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -4, height: 4},
        textShadowRadius: 10
    },
    SubTitle:{
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'yellow',
        // flex:8,
    },
    SubTitleText:{
        fontSize:50,
        color:'#61dafb',
        fontFamily:'AvenirNext-Italic',
        textAlign:'center',
        backgroundColor:'rgba(0,149,255,0.09)',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 6
        // opacity:0.2,
        // fontWeight:'bold',
    }
})

export default SignUp;