import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { setTheme } from '../../store/actions/app';
import { store } from '../../themes';

const Store = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => dispatch(setTheme(store)), [dispatch]);
	return (
		<div className={classes.rootContainer}>
			<Typography className={classes.label}>Store coming soon...</Typography>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: theme.palette.secondary.main
	},
	label: {
		color: theme.palette.primary.main,
		textShadow: `0 0 1px ${theme.palette.primary.dark}`
	}
}));

export default Store;