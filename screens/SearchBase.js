import React, {useState} from 'react'
import {View, Text, StyleSheet, Alert,StatusBar} from 'react-native'
import {useDispatch} from 'react-redux'
import {SearchBar} from 'react-native-elements'

import ListingFlatList from '../components/ListingFlatList'
import { URL_BASE } from '../constants/links'
import {ChangeDisplayListing} from '../redux/actions'


const SearchBase = props =>{
     const [searchQuery,setSearchQuery] = useState('')
     const [data,setData] = useState([])   
     const [load,setLoad] = useState(false)   
     const [found,setFound] = useState(false)   
    
     const dispatch = useDispatch()
     const handleSubmit = () =>{
        if(searchQuery.trim()){
            setFound(true)
        fetch(URL_BASE+`/search/${searchQuery.trim()}?xr=never`)
            .then(res =>res.json())
            .then(res =>{
                setLoad(true)
                setFound(false)
                setData(res)
            })
        }
        else{
            Alert.alert('search field empty')
        }
     }
    
    const handlePress = listingProps =>{
        const listing = listingProps
        dispatch(ChangeDisplayListing(listing))
        props.navigation.navigate('ListingShow')    
    }

    return(
        <View styles={styles.container}>
              <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <SearchBar showLoading={found}
                onSubmitEditing={handleSubmit}
                returnKeyType='search'
              placeholder="Search listings..."
              onChangeText={setSearchQuery}
              value={searchQuery}
              containerStyle={{paddingTop:20}}
              inputStyle={{fontSize:30,color:'white'}}
              inputContainerStyle={{height:50}}
              searchIcon={{onPress:handleSubmit}}
                />
            </View>
            {load &&<View style={styles.divisionBox}>
             <Text style={styles.divisionText}> {data.length} Found Result(s)</Text>
            </View>}
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
        height:96,
        backgroundColor:'#34383b'
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
        height:70,
        paddingTop:35,
        borderBottomColor:'grey',
        borderBottomWidth:2
        // paddingLeft:60,
        // backgroundColor:'red'
        // color:'green'
    },
    divisionText:{
        color:'#0d3341',
        fontSize:20,
        alignSelf:'center'
    },
    results:{
        // backgroundColor:'red',
        height:672,
        // paddingTop:5,
        // flex:1,
        paddingLeft:30,
    }
})

export default SearchBase;