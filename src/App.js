import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import ToHome from './Pages'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ToHome} />
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;