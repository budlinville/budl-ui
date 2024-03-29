import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from '../store';
import { setHeaderExpanded } from '../store/actions/app';
import Routes from './Routes';
import Theme from './Theme';

export const history = createBrowserHistory();

history.listen(location => {
  const { pathname } = location;
  const { app : { headerExpanded }} = store.getState();
  const atHome = pathname === '/' || pathname === '/home';
  if (atHome && !headerExpanded) {
    store.dispatch(setHeaderExpanded(true));
  } else if (!atHome && headerExpanded) {
    store.dispatch(setHeaderExpanded(false));
  }
});

const App = () => {
  useEffect(() => {
    const { pathname } = history.location;
    if (pathname === '/home' || pathname === '/') {
      store.dispatch(setHeaderExpanded(true));
    } else {
      store.dispatch(setHeaderExpanded(false));
    }
  }, []);
  return (
    <Provider store={store}>
      <Theme>
        <Routes history={history}/>
      </Theme>
    </Provider>
  );
}

export default App;