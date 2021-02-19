import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import { connect } from '../../../constants/pages/portfolio';

const Connect = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>
			<a href={connect.links.linkedin}>
				<IconButton className={classes.iconButton} aria-label='Linkedin'>
					<LinkedInIcon className={classes.icon} />
				</IconButton>
			</a>
			<a href={connect.links.github}>
				<IconButton className={classes.iconButton} aria-label='Github'>
					<GitHubIcon className={classes.icon} />
				</IconButton>
			</a>
			<a href={connect.links.email}>
				<IconButton className={classes.iconButton} aria-label='Email'>
					<EmailIcon className={classes.icon} />
				</IconButton>
			</a>
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
		'&:hover': {
			backgroundColor: theme.palette.secondary.main
		}
	},
	icon: {
		width: '4rem',
		height: '4rem',
		color: 'white'
	}
}));

export default Connect;