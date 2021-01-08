import React from 'react';
import { createBrowserHistory } from 'history';

import Home from './Home';

const Redirect = ({to}) => {
	const browserHistory = createBrowserHistory();
	browserHistory.replace(to);
	return <Home />;
};

export default Redirect;