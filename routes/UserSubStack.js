import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from '../screens/UserProfile'
import ListingShow from '../screens/ListingShow'
import Header from './headers/Header';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const UserSubStack = createStackNavigator({ 
    Profile:{
        screen:Profile,
        navigationOptions: {
            headerShown: false,
        }
    },
    ListingShow:ListingShow,
});

export default UserSubStack