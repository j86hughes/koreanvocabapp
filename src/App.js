import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './redux';
import MainBit from './components/modules/mainBit';

class App extends Component {
  render() {

    let store = createStore(allReducers)

    return (
      <Provider store={store}>
        <MainBit />
      </Provider>
    );
  }
}

export default App;
