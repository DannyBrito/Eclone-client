import React,{useState,useEffect} from 'react';
import { StyleSheet} from 'react-native';

import { Provider } from 'react-redux'
import store from './redux/store'

import Navigator from './routes/SignUp'

export default function App() {

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FA1AC',
    // alignItems: 'center',
    // alignContent: 'space-between',
    // justifyItems:'center'
  },
});
