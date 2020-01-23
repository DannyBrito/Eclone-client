import { Dimensions, Text,View,StyleSheet,Image, TouchableWithoutFeedback} from 'react-native';
import React,{useState} from 'react';
import SideSwipe from 'react-native-sideswipe';
import Card from '../components/Card'
import { useSelector } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { TextInput } from 'react-native-gesture-handler';
import { Icon,Button } from 'react-native-elements'

const Swiper = props =>{
   const [currentIndex,setCurrentIndex] = useState(0)
    // center items on screen
    const data = useSelector(state => state.first.fetched_listings)
    
    const renderItem = ({item,indx}) => (
        <TouchableWithoutFeedback onLongPress={()=>props.handlePress(item)}>
        <View style={styles.itemContainer}>
            
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item.url}} />
            </View>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.condition}>condition: {item.condition}</Text>
            <Text style={styles.description}>{item.description}</Text>

        </View>
        </TouchableWithoutFeedback>
    )

    return(
        <View style={styles.container}>
        <Carousel
        layout='stack'
        // ref={(c) => { this._carousel = c; }}
        data={data}
        renderItem={renderItem}
        sliderWidth={415}
        itemWidth={350}
      />
      </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column-reverse',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'blue',
    },
    itemContainer:{
        marginTop:25,
        backgroundColor:'#e9f9ff',
        height:600,
        borderRadius:20,
        borderColor:'#006285',
        borderWidth:2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,     
    },
    titleBox:{
        height:50,
        alignItems:'center',
        paddingTop:5
    },
    buttonsBox:{
        height:35,
        // backgroundColor:'#',
        flexDirection:'row',
    },addTocart:{
        width:100
    },
    title:{
        fontSize:30,
        fontWeight:'400',
    },
    imageContainer:{
        width: '100%',
        height:400,
        // backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#006285',
        borderBottomWidth:1,
    },
    image:{
        height:'100%',
        width:'100%',
        // borderRadius:20,
        borderTopLeftRadius:18,
        borderTopRightRadius:18
    },price:{
        fontSize:25,
        fontWeight:'600',
        marginLeft:20
    },
    condition:{
        // fontSize:25,
        // fontWeight:'600',
        marginLeft:20  
    },
    description:{
        marginHorizontal:20  
    }

})
export default Swiper