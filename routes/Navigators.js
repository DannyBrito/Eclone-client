import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthStack from './AuthStack'
import AppStack from './AppStack'
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.


export default createAppContainer(
  createSwitchNavigator(
    {
      App: {screen:AppStack,
        header: ()=> false
      },
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
)