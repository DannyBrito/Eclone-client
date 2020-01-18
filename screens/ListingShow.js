import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView,Image} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import {DELETE_FETCH, random_image,POST_FETCH} from '../constants/links'
import { likedListings as likedListingsAction } from '../redux/actions'
import { Button } from 'react-native-elements';


const ListingShow = () =>{
    const[liked,setLiked] = useState({})
    const likedListings = useSelector(state => state.first.liked_listings)
    const user = useSelector(state => state.first.currentUser)
    const dispatch = useDispatch()

    const props = useSelector(state => state.first.listing_display)

    useEffect(()=>{
        const tempFav = likedListings.find(favL => favL.id === props.id)
        if(tempFav){
            setLiked(tempFav)
        }
        else{
            setLiked({})
        }
    },[])

    useEffect(()=>{
        const tempFav = likedListings.find(favL => favL.id === props.id)
            if(tempFav){
                setLiked(tempFav)
            }
            else{
                setLiked({})
            }
        },[props,likedListings])
        
        const handleDelete = () =>{
            DELETE_FETCH(`favorites/${liked.fav_id}`)
            .then(res =>{
                if(res.fav_id){
                const updatedLikedListings = [...likedListings].filter(list => list.fav_id !== res.fav_id)
                dispatch(likedListingsAction(updatedLikedListings))
                setLiked({})
                }
            })
    }
    const handlePost = () =>{
        POST_FETCH(`favorites`,{user_id:user.id,listing_id:props.id})
            .then(res =>{
                if(res.fav_id){
                const updatedLikedListings = [...likedListings,res]
                dispatch(likedListingsAction(updatedLikedListings))
                setLiked({res})
                }
            })
    }

    
    // console.log(p.navigation.state.params.id)
    return(
        <View style={styles.container}>
            
            <View style={styles.titleBox}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.imageBox}>
                <Image style={styles.image} source={{uri: random_image}} />
            </View>
            <View style={styles.content}>
                <View style={styles.base}>
                <Text style={styles.price}>${props.price}</Text>
                {liked.fav_id ? 
                <View style={styles.heartButton}>
                    <Ionicons name={'ios-heart'} size={32} color={'red'} onPress={handleDelete}/>
                </View>
                :
                <View style={styles.heartButton}>
                    <Ionicons name={'ios-heart-empty'} size={32} color={'black'} onPress={handlePost}/>
                </View>
            }
                </View>
                <Text style={styles.condition}>condition: {props.condition}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        
            {props.on_stock &&<View><Button title='Add To Cart 🛒'/><Ionicons name={'ios-cart'} size={32} color={'blue'} /></View>}
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop:50,
        // alignItems:'center'
    },
    base:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleBox:{
        // flex:2,
        height:140,
        justifyContent:'center',
    },
    title:{
        fontSize:50,
        color:'black',
        fontWeight:'normal'
    },
    imageBox:{
        flex:5,
    },
    image:{
        // marginVertical: 5,
        flex:1,
        // width:400,
        // height:400,
        borderRadius:20,
        borderWidth:2.5,
        borderColor:'black'
        
    },
    content:{
        flex:3,
        padding:15,
        // justifyContent:'center'
    },
    price:{
        // flex:1,
        fontSize:35,
        color:'black',
        fontWeight:'bold'
        
    },condition:{
        fontSize:18,
        color:'black',
        // fontWeight:'bold'
    },
    description:{
        paddingTop:10,
        flex:1,
    },
    heartButton:{
        // backgroundColor:'blue',
        width:30
    }
})

export default ListingShow;