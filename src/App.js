import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import RouteMothership from './components/pages/routeMothership';

const App = () => (
  <Provider store={store}>
    <Router>
      <RouteMothership />
    </Router>
  </Provider>
);

export default App;
