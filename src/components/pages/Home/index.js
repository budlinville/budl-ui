import React from 'react';

import Header from './Header';
import SceneWrapper from './SceneWrapper';
import Portfolio from './Portfolio';

const Home = () => {
	return(
		<Header Scene={ SceneWrapper } Page={ Portfolio } />
	);
}

export default Home;