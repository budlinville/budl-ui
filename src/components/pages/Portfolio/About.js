import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useTheme } from '@material-ui/styles';

import profile from '../../../resources/profile.jpg';

const About = () => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div className={classes.rootContainer}>
			<img src={profile} alt='profile' className={classes.profile} />
			<div className={classes.aboutContainer}>
				<div className={classes.headerContainer}>
					<Typography variant="h1">About</Typography>
					<IconButton aria-label="Download Resume">
						<GetAppIcon className={classes.resume}/>
					</IconButton>
				</div>
				<Typography variant="h6">
					about about about about about about about about about
					about about about about about about about about about
					about about about about about about about about about	
					about about about about about about about about about
					about about about about about about about about about
					about about about about about about about about about
					about about about about about about about about about
					about about about about about about about about about
					about about about about about about about about about
				</Typography>
			</div>
		</div>
	);
};

export default About;

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		width: '100vw',
		flexDirection: 'row',
		backgroundColor: theme.palette.secondary.light
	},
	profile: {
		flex: 1,
		width: 'auto',
  	maxWidth: '100%',
  	height: 'auto',
		borderRadius: '100%',
		margin: '30px'
	},
	aboutContainer: {
		flex: 2,
		display: 'flex',
		flexDirection: 'column'
	},
	headerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	resume: {
		height: '40px',
		width: '40px'
	}
}));