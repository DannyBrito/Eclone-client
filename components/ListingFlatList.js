import React from 'react'
import {View, Text, StyleSheet,FlatList} from 'react-native'
import Card from './Card'


const ListingFlatList = props =>{
    return(
        <>
            <FlatList style={{...styles.list,...props.style}}columnWrapperStyle={2} horizontal={false} numColumns={2}
                contentContainerStyle={{paddingBottom:60}}
                data={props.data}
                renderItem={({item})=><Card handlePress={props.handlePress} {...item} />}
                keyExtractor={item => `${item.id}`}/>
        </>
    )
}

const styles = StyleSheet.create({
    list:{
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingVertical: 10,
        // marginBottom: 40
    }
})

export default  ListingFlatList;