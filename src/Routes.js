import {
  Route,
  Router,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Redirect from './components/Redirect';
import Page from './components/pages/Page';
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
				<Route path='/portfolio' render={() => <Page><Portfolio/></Page>}/>
				<Route path='/store' render={() => <Page><Store/></Page>}/>
				<Route path='/messenger' render={() => <Page><Messenger/></Page>}/>
			</Switch>
		</Router>
	);
}

export default Routes;