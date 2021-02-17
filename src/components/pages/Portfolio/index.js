import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setTheme } from '../../../store/actions/app';
import { portfolio } from '../../../themes';

import About from './About';
import Connect from './Connect';
import Skills from './Skills';
import Work from './Work';
import QED from './QED';

const Portfolio = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(setTheme(portfolio)), [dispatch]);

	return (
		<>
			<About />
			<Connect />
			<Skills />
			<Work />
			<QED />
		</>
	);
};

export default Portfolio;
