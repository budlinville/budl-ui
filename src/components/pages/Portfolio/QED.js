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
		height: '1.5rem',
		backgroundColor: theme.palette.secondary.light,
		borderTop: `2px solid ${theme.palette.secondary.main}`
	},
	qedText: {
		height: '1rem',
		color: 'white'
	}
}));

export default QED;