import { history } from './App';

// comp must be same component returned for to's path
const Redirect = ({to, comp=null}) => {
	history.replace(to);
	return comp;
};

export default Redirect;