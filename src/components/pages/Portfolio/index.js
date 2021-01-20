import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Title from './Title';
import profile from '../../../resources/profile.jpg';

const Portfolio = () => {
	const toggleDisplayBio = () => {
		setDisplayBio(!displayBio);
	}

	const [displayBio, setDisplayBio] = useState(false);
	const classes = useStyles();

	return (
		<div className={classes.portfolio}>
			<img src={profile} alt='profile' className={classes.profile} />
			<h1>Bud Linville</h1>
			<Title />
			{ displayBio ? (
				<div>
					<p>Current Softweare Engineer II at Walmart Labs</p>
					<p>Former Software Engineer Intern at Garmin</p>
					<button onClick={toggleDisplayBio}>Show less</button>
				</div>
			) : (
				<div>
					<button onClick={toggleDisplayBio}>Read more</button>
				</div>
			)}
		</div>
	);
}

// or makeStyles(theme => ({ ...
const useStyles = makeStyles({
	portfolio: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: '20px'
	},
	profile: {
		width: '120px',
		height: '120px',
		borderRadius: '60px'
	},
	titleFadeOut: {
		opacity: 0,
		animationName: 'fadeOut',
		animationDuration: '2s'
	},
	titleFadeIn: {
		opacity: '100',
		animationName: 'fadeIn',
		animationDuration: '2s'
	},
	'@keyframes fadeOut': {
		from: { opacity: 100 },
		to: { opacity: 0 }
	},
	'@keyframes fadeIn': {
		from: { opacity: 0 },
		to: { opacity: 100 }
	}
});

export default Portfolio;
