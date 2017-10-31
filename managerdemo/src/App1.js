import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
