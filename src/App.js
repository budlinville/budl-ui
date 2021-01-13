import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import './styles/App.css';
import store from './store';
import Header from './components/Header';
import Routes from './Routes';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Routes history={history}/>
    </Provider>
  );
}

export default App;