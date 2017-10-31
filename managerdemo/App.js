import React from 'react';
import App1 from './src/App1';
export default class App extends React.Component {
 
  render() {
    //{} is for some initial State 
    //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
       <App1/>
    );
  }
}

