import React,{useState} from 'react'
import {View, TextInput, StyleSheet,Text,Button, Alert,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'

const SignUpForm = props =>{
    const[user, setUser] = useState('')
    const[visiblePassword, setVisiblePassword] = useState(true)
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const [borderColor, setBorderColor] = useState('black')

    const onSubmit =()=>{
        if(confirmPassword && password && user){
            if(confirmPassword === password){
            props.handleSubmit(user,password)
            }
            else{
                Alert.alert('Passwords Don\'t Match',0,[{text:'OK',onPress:()=>setBorderColor('red')}])
            }
        }
    }

    return(
        <View style={{...styles.container,...props.style}}>
            <View style={styles.subContainer}>
                
                <Text style={styles.paddingVertical}>User:</Text>
                
                <TextInput style={styles.input} autoCapitalize='none' onChangeText={setUser} value={user} placeholder="Username"/>
                
                <Text style={styles.paddingVertical}>Password:</Text>
                
                <View style={{...styles.inputBox,borderColor:borderColor}}> 
                    <TextInput  style={styles.inputW} secureTextEntry={visiblePassword} type="password" onChangeText={setPassword} value={password} placeholder="Password"/>
                    <View>
                    <Icon iconStyle={{marginRight:1}}name={visiblePassword ?'eye':'eye-off'}type='material-community'color='black'onPress={()=>setVisiblePassword(prev => !prev)}/>
                    </View>
                </View>
                <Text style={styles.paddingVertical}>Confirm Password:</Text>
                <TextInput returnKeyType="go" onSubmitEditing={onSubmit} style={{...styles.input,borderColor:borderColor}} secureTextEntry={visiblePassword} type="password" onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Password"/>


                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonBox} >
                        <Button  style={styles.button} title="Sign-Up" onPress={onSubmit}/>
                    </View>
                    <View style={styles.buttonBox}>
                        <Button color='white' onPress={props.handleChange} style={styles.button} title="Log-In" />
                    </View>
                </View>

            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundCol    or:'#1f222a',
        alignItems:'center',
        padding:10,
        paddingTop:40
    },
    subContainer:{
        paddingVertical:10,
        backgroundColor:'#396a7b',
        borderRadius:5,
        width:250,
        // height:225,
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:0.70,
    },
    inputBox:{
        backgroundColor:'white',
        borderColor:'black',
        // borderRadius:20,
        height:30,
        width:200,
        maxWidth:200,
        borderWidth:1.5,
        borderColor:'black',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    input:{
        backgroundColor:'white',
        borderColor:'black',
        // borderRadius:20,
        height:30,
        width:200,
        maxWidth:200,
        borderWidth:1.5,
        borderColor:'black',
        justifyContent:'center',
        flexDirection:'row'
    },
    inputW:{
        height:30,
        width:170,
        maxWidth:170,
        // justifyContent:'center',
        // flexDirection:'row'
    },
    buttonInput:{
        flex:1,
        backgroundColor:'pink'
    },
    paddingVertical:{
        paddingVertical:10,
        fontSize:20
    },
    buttonsContainer:{
        marginTop:20,
        width:200,
        flexDirection:'row',
        // backgroundColor:'orange',
        justifyContent:'space-between'
    },
    button:{
        width:90,
        backgroundColor:'black',
        borderColor:'black',
        borderRadius:20,
    },
    buttonBox:{
        width:90,
        backgroundColor:'#1f222a',
        borderWidth:0.7,
        borderRadius:15,
    }

})

export default SignUpForm;