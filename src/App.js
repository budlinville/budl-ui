import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/App.css';
import store from './store';
import Redirect from './components/Redirect';
import About from './components/pages/About';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={props => (
            <Redirect {...props} to='/home'/>
          )}/>
          <Route path='/home' component={null}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;