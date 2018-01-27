import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './redux';
import MainBit from './components/mainBit';
import wordsArray from './components/greetings';

class App extends Component {
  render() {

    let store = createStore(allReducers)
    const test = wordsArray[0].korean;

    return (
      <Provider store={store}>
        <MainBit />
      </Provider>
    );
  }
}

export default App;
