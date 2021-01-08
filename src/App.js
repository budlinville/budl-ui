import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/App.css';
import store from './store';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Redirect from './components/pages/Redirect';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' render={props => (
            <Redirect {...props} to='/home'/>
          )}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;