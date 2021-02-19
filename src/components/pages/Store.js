import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { setTheme } from '../../store/actions/app';
import { store } from '../../themes';

const Store = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => dispatch(setTheme(store)), [dispatch]);
	return (
		<div className={classes.rootContainer}>
			Store coming soon...
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

export default Store;