import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import './styles/App.css';
import store from './store';
import { setHeaderExpanded } from './store/actions/scene';
import Header from './components/Header';
import Routes from './Routes';

export const history = createBrowserHistory();

history.listen(location => {
  const { pathname } = location;
  const { scene : { headerExpanded }} = store.getState();
  const atHome = pathname === '/' || pathname === '/home';
  if (atHome && !headerExpanded) {
    store.dispatch(setHeaderExpanded(true));
  } else if (!atHome && headerExpanded) {
    store.dispatch(setHeaderExpanded(false));
  }
})

const App = () => {
  useEffect(() => {
    const { pathname } = history.location;
    if (pathname === '/home' || pathname === '/') {
      store.dispatch(setHeaderExpanded(true));
    }
  }, []);
  return (
    <Provider store={store}>
      <Routes history={history}/>
    </Provider>
  );
}

export default App;