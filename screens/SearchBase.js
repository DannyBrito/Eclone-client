import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {useDispatch} from 'react-redux'
import InputLabel from '../components/InputLabel'
import ListingFlatList from '../components/ListingFlatList'
import { URL_BASE } from '../constants/links'
import {ChangeDisplayListing} from '../redux/actions'
const SearchBase = props =>{
     const [searchQuery,setSearchQuery] = useState('')
     const [data,setData] = useState([])   
    
     const dispatch = useDispatch()
     const handleSubmit = () =>{
        if(searchQuery.trim()){
        fetch(URL_BASE+`/search/${searchQuery.trim()}?xr=never`)
            .then(res =>res.json())
            .then(res =>{
                setData(res)
            })
        }
        else{
            Alert.alert('search field empty')
        }
     }
    
    const handlePress = listingProps =>{
        const {url,...listing} = listingProps
        dispatch(ChangeDisplayListing(listing))
        props.navigation.navigate('ListingShow')    
    }

    return(
        <View styles={styles.container}>
            <View style={styles.header}>
                <InputLabel value={searchQuery} handleChange={setSearchQuery} title_style={styles.titleSearch} title="Search:" placeholder="search listings" style={styles.searchBox}/>
                <View style={styles.buttonBox}>
                    <View style={styles.button}>
                        <Button color="white" onPress={handleSubmit} title='Search'/>
                    </View>
                </View>
            </View>
            <View style={styles.divisionBox}>
    <Text style={styles.divisionText}> {data.length} Found Result(s)</Text>
            </View>
            <View style={styles.results}>
                <ListingFlatList data={data} handlePress={handlePress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        paddingTop:40,
        paddingBottom:10,
        height:170,
        backgroundColor:'grey'
    },
    searchBox:{
        paddingHorizontal:40,
    },
    titleSearch:{
        color:'white',
        fontSize:30
    },
    buttonBox:{
        paddingVertical:10
    },
    button:{
        alignSelf:'center',
        backgroundColor:'black',
        borderColor:'white',
        borderRadius:20,
        borderWidth:1.4,
        width:100
    },
    divisionBox:{
        height:35,
        paddingTop:5,
        borderBottomColor:'grey',
        borderBottomWidth:2
        // paddingLeft:60,
        // backgroundColor:'red'
        // color:'green'
    },
    divisionText:{
        color:'blue',
        fontSize:20,
        alignSelf:'center'
    },
    results:{
        // paddingTop:5,
        paddingLeft:30,
    }
})

export default SearchBase;