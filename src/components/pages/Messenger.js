import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setTheme } from '../../store/actions/app';
import { messenger } from '../../themes';

const Messenger = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(setTheme(messenger)), [dispatch]);

	return (
		<div>
			Messenger coming soon...
		</div>
	);
};

export default Messenger;