import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './redux';
import QuestionSection from './components/pages/questionSection';

class App extends Component {
  render() {

    let store = createStore(
      allReducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return (
      <Provider store={store}>
        <QuestionSection />
      </Provider>
    );
  }
}

export default App;
