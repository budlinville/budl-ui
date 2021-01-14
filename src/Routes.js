import {
  Route,
  Router,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Redirect from './components/Redirect';
import Portfolio from './components/pages/Portfolio';
import Store from './components/pages/Store';
import Messenger from './components/pages/Messenger';

const Routes = ({ history }) => {
	return (
		<Router history={ history }>
			<Header/>
			<Switch>
				<Route exact path='/' render={ () => <Redirect to='/home'/> }/>
				<Route path='/home' component={null}/>
				<Route path='/portfolio' component={Portfolio}/>
				<Route path='/store' component={Store}/>
				<Route path='/messenger' component={Messenger}/>
			</Switch>
		</Router>
	);
}

export default Routes;