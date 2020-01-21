import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import  Search from '../screens/SearchBase'
import ListingShow from '../screens/ListingShow'
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const SearchSubStack = createStackNavigator({ 
    Search:{
        screen:Search,
        navigationOptions: {
            headerShown: false,
        }
    },
    ListingShow:ListingShow,
});

export default SearchSubStack