import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home'
import ListingShow from '../screens/ListingShow'
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const HomeSubStack = createStackNavigator({ 
    Home: Home,
    ListingShow:ListingShow,
});

export default HomeSubStack