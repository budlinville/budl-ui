import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Skills = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>Skills</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		height: '40rem',
		backgroundColor: 'yellow'
	}
}));

export default Skills;