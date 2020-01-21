import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Sell from '../screens/NewListing'
import ListingShow from '../screens/ListingShow'
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const SellSubStack = createStackNavigator({ 
    Sell:{
        screen:Sell,
        navigationOptions: {
            headerShown: false,
        }
    },
    ListingShow:ListingShow,
});

export default SellSubStack