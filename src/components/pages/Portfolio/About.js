import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';

import { about } from '../../../constants/pages/portfolio';

import profile from '../../../resources/profile.jpg';

const About = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>
			<img src={profile} alt='profile' className={classes.profile} />
			<div className={classes.aboutContainer}>
				<Typography className={classes.aboutText} variant="h3">{ about.description }</Typography>
				<div className={classes.buttonContainer}>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						startIcon={<ReceiptIcon />}>
						{ about.resume }
					</Button>
				</div>
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
		backgroundColor: theme.palette.secondary.light,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center'
    }
	},
	profile: {
		flex: 1,
		borderRadius: '100%',
		margin: '4rem',
		width: '45%',
		height: '45%',
		border: `5px solid ${theme.palette.primary.dark}`,
		boxShadow: `1px 1px 2px ${theme.palette.primary.dark},
			0 0 25px ${theme.palette.primary.main},
			0 0 5px ${theme.palette.primary.light}`,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			width: '25em',
  		height: '25em'
    }
	},
	aboutContainer: {
		flex: 2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: "space-between",
		margin: '4rem'
	},
	buttonContainer: {
		alignSelf: 'flex-end'
	},
	aboutText: {
		color: theme.palette.primary.dark,
		textShadow: `1px 1px 2px ${theme.palette.primary.light}`
	},
	resume: {
		height: '40px',
		width: '40px'
	}
}));