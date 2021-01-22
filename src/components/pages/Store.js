import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setTheme } from '../../store/actions/app';
import { store } from '../../themes';

const Store = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(setTheme(store)), [dispatch]);
	return (
		<div>
			Store coming soon...
		</div>
	);
};

export default Store;