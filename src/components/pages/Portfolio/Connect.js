import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const Connect = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>
			<IconButton className={classes.iconButton} aria-label='Linkedin'>
				<LinkedInIcon className={classes.icon} />
			</IconButton>
			<IconButton className={classes.iconButton} aria-label='Github'>
				<GitHubIcon className={classes.icon} />
			</IconButton>
			<IconButton className={classes.iconButton} aria-label='Email'>
				<EmailIcon className={classes.icon} />
			</IconButton>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '8rem',
		backgroundColor: theme.palette.primary.dark
	},
	iconButton: {
	},
	icon: {
		width: '4rem',
		height: '4rem',
		color: 'white'
	}
}));

export default Connect;