import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './redux';
import RouteMothership from './components/pages/routeMothership';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {

    let store = createStore(
      allReducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return (
      <Provider store={store}>
        <Router>
          <RouteMothership />
        </Router>
      </Provider>
    );
  }
}

export default App;
