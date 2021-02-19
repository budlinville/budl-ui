import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { setTheme } from '../../store/actions/app';
import { messenger } from '../../themes';

const Messenger = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => dispatch(setTheme(messenger)), [dispatch]);

	return (
		<div className={classes.rootContainer}>
			Messenger coming soon...
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: theme.palette.secondary.light
	}
}));

export default Messenger;