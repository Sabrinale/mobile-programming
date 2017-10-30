import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';
export default class App extends React.Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyCE7hARhGEpYeozvFUAVD3Mbz3Og9RgZ64',
      authDomain: 'mobiprogram-34279.firebaseapp.com',
      databaseURL: 'https://mobiprogram-34279.firebaseio.com',
      projectId: 'mobiprogram-34279',
      storageBucket: 'mobiprogram-34279.appspot.com',
      messagingSenderId: '623707748833'
    };
    firebase.initializeApp(config);
  }
  render() {
    //{} is for some initial State 
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
       <Provider store={store}>
         <Router />
      </Provider>
    );
  }
}

