import { createBrowserHistory } from 'history';

// comp must be same component returned for to's path
const Redirect = ({to, comp=null}) => {
	const browserHistory = createBrowserHistory();
	browserHistory.replace(to);
	return comp;
};

export default Redirect;