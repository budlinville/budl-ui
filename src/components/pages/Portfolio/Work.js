import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Work = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>Work</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '40rem',
		backgroundColor: 'yellow'
	}
}));

export default Work;