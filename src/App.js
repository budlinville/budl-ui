import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import './styles/App.css';
import store from './store';
import Redirect from './components/Redirect';
import Portfolio from './components/pages/Portfolio';
import Store from './components/pages/Store';
import Messenger from './components/pages/Messenger';
import Header from './components/Header';

export const history = createBrowserHistory();

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
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/store' component={Store}/>
          <Route path='/messenger' component={Messenger}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;