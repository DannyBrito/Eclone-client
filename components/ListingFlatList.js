import React from 'react'
import {View, Text, StyleSheet,FlatList} from 'react-native'
import Card from './Card'


const ListingFlatList = props =>{
    return(
        <>
            <FlatList style={styles.list}columnWrapperStyle={2} horizontal={false} numColumns={2}
                data={props.data}
                renderItem={({item})=><Card handlePress={props.handlePress} {...item} />}
                keyExtractor={item => `${item.id}`}/>
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default  ListingFlatList;