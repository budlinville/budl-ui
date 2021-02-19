import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import work from '../../../data/work';

const WorkAccordion = ({ title, description, index }) => {
	const classes = useStyles();
	const className = index % 2 === 1 ? classes.oddAccordion : classes.evenAccordion;
	return(
		<Accordion className={className}>
			<AccordionSummary expandIcon={ <ExpandMoreIcon /> } aria-controls="panel1a-content">
				<Typography className={classes.title}> { title } </Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography className={classes.description}> { description } </Typography>
			</AccordionDetails>
		</Accordion>
	);
}

const Work = () => {
	const classes = useStyles();
	const workAccordions = work.map((w, i) => (
		<WorkAccordion title={w.title} description={w.description} index={i} key={i} />
	));
	return (
		<div className={classes.rootContainer}>
			<Typography className={classes.heading}>Past Work Experience</Typography>
			<div className={classes.workContainer}>
				{ workAccordions }
			</div>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.primary.main,
		padding: '1rem',
		paddingBottom: '3rem'
	},
	workContainer: {
		width: '100%'
	},
	heading: {
		color: 'white',
		fontSize: 40,
		textShadow: `2px 2px 5px ${theme.palette.secondary.light}`,
		marginBottom: '1rem'
	},
	title: {
		fontSize: 20,
		textShadow: `0 0 25px ${theme.palette.secondary.light}`,
	},
	description: {

	},
	oddAccordion: {
		color: theme.palette.primary.dark
	},
	evenAccordion: {
		backgroundColor: theme.palette.secondary.main,
		color: 'white'
	}
}));

export default Work;