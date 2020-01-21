import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AuthStack = createStackNavigator({ 
    LogIn:{
        screen:LogIn,
        navigationOptions: {
            header:() => false,
        }
    },
    SignUp:{
        screen:SignUp,
        navigationOptions: {
            header:() => false,
        }
    }
});

export default AuthStack