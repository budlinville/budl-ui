import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const QED = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>
			<Typography className={classes.qedText}>Q.E.D.</Typography>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '2rem',
		backgroundColor: theme.palette.primary.dark,
		paddingBottom: '5px'
	},
	qedText: {
		display: 'flex',
		height: '1rem',
		color: theme.palette.primary.light
	}
}));

export default QED;