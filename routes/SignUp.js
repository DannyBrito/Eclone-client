import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import Home from '../screens/Home'
import ListingShow from '../screens/ListingShow'
import NewListing from '../screens/NewListing'

const screens = {
    LogIn:{
        screen: LogIn,
        navigationOptions: {
            header:() => false,
        },
    },
    SignUp:{
        screen: SignUp,
        navigationOptions: {
            header:() => false,
        },
    },
    Home:{
        screen:Home,
        navigationOptions: {
            header:() => false,
        },
    },
    ListingShow:{
        screen:ListingShow,
        navigationOptions:{
            title: false
        }
    }
}

const  SignUpStack = createStackNavigator(screens)

export default createAppContainer(
    createBottomTabNavigator(
    {
        SignUp: {screen:SignUpStack,
            navigationOptions: {
                header:() => false,
            }},
        NewListing:{screen:NewListing},
        ListingShow:{screen:ListingShow}
    },
    {

    }
))