import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Redirect from './components/pages/Redirect'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => (
          <Redirect {...props} to="/home"/>
        )}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;