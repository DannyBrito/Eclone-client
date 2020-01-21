import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'

const Header = props =>{
    const userInfo = useSelector(state => state.first.currentUser)
    return(
        <View>
            <Text>{userInfo.username}Testing</Text>
        </View>
    )
}


export default Header;