import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeSubStack from './HomeSubStack'
import UserSubStack from './UserSubStack'
import SellSubStack from './SellSubStack'
import SearchSubStack from './SearchSubStack';
import Cart from '../screens/CartCheckOut';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createBottomTabNavigator({ 
    Home: HomeSubStack,
    Profile: {
        screen:UserSubStack,
        navigationOptions: {
            header:() => false,
        }
    },
    Sell: {
        screen:SellSubStack,
        navigationOptions: {
            header:() => false,
        }
    },
    Search: {
        screen:SearchSubStack,
        navigationOptions: {
            header:() => false,
        }
    },
    Cart:{
        screen:Cart,
        navigationOptions: {
            headerShown: false,
        }
    },
});

export default AppStack