import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const QED = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>QED</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '10rem',
		backgroundColor: 'red'
	}
}));

export default QED;