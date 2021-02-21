import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';

import { about } from '../../../constants/pages/portfolio';

import profile from '../../../resources/profile3.jpg';
import pdf from '../../../resources/resume.pdf';

const About = () => {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>
			<div className={classes.profileContainer}>
				<img src={profile} alt='profile' className={classes.profile} />
			</div>
			<div className={classes.aboutContainer}>
				<Typography className={classes.aboutText}>{ about.description }</Typography>
				<div className={classes.buttonContainer}>
					<a href={pdf} style={{ textDecoration: 'none' }} download>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							startIcon={<ReceiptIcon />}>
								{ about.resume }
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.palette.secondary.main,
		padding: '4rem',
		paddingBottom: '2rem',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			padding: '1rem',
			paddingTop: '4rem'
    }
	},
	profileContainer: {
		flex: 1,
		display: 'flex',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			marginBottom: '2em'
    }
	},
	profile: {
		borderRadius: '50%',
		width: '25em',
		height: '25em',
		border: `1px solid ${theme.palette.primary.main}`,
		boxShadow: `1px 1px 2px ${theme.palette.primary.dark}`,
		[theme.breakpoints.down('sm')]: {
			width: '20em',
  		height: '20em',
			marginBottom: 0
    }
	},
	aboutContainer: {
		flex: 2,
		display: 'flex',
		flexDirection: 'column',
		margin: '2rem',
		[theme.breakpoints.down('sm')]: {
			marginTop: 0
    }
	},
	buttonContainer: {
		alignSelf: 'flex-end',
		margin: '1em'
	},
	aboutText: {
		color: 'white',
		fontSize: '3em',
		textShadow: `1px 1px 1px ${theme.palette.primary.main}`,
		[theme.breakpoints.down('md')]: {
			fontSize: '2em'
    }
	},
	resume: {
		height: '40px',
		width: '40px'
	}
}));

export default About;
