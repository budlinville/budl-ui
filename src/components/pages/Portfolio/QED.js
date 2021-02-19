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
		backgroundColor: theme.palette.primary.main,
		borderTop: `2px solid ${theme.palette.primary.light}`,
		borderBottom: `2px solid ${theme.palette.primary.light}`
	},
	qedText: {
		height: '1rem',
		color: theme.palette.primary.light,
		margin: '0.5rem'
	}
}));

export default QED;