import {
  Route,
  Router,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Redirect from './Redirect';
import Page from './pages/Page';
import Portfolio from './pages/Portfolio';
import Store from './pages/Store';
import Messenger from './pages/Messenger';

const Routes = ({ history }) => {
	return (
		<Router history={ history }>
			<Header/>
			<Switch>
				<Route exact path='/' render={ () => <Redirect to='/home'/> }/>
				<Route path='/home' component={null}/>
				<Route path='/portfolio' render={() => <Page><Portfolio/></Page>}/>
				<Route path='/store' render={() => <Page><Store/></Page>}/>
				<Route path='/messenger' render={() => <Page><Messenger/></Page>}/>
			</Switch>
		</Router>
	);
}

export default Routes;