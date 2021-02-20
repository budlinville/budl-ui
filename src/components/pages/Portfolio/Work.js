import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import work from '../../../data/work';

const WorkAccordion = ({ position, list, index }) => {
	const classes = useStyles();
	const className = index % 2 === 1 ? classes.oddAccordion : classes.evenAccordion;
	const detailsClassName = index % 2 === 1 ? classes.oddAccordionDetails : classes.evenAccordionDetails;
	return(
		<Accordion className={className}>
			<AccordionSummary expandIcon={ <ExpandMoreIcon /> } aria-controls="panel1a-content">
				<Typography className={classes.title}> { position } </Typography>
			</AccordionSummary>
			<AccordionDetails className={detailsClassName}>
				<Typography className={classes.description}>
					<ul> { list.map( item => ( <li> { item.desc } </li> ))}</ul>
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

const Work = () => {
	const classes = useStyles();
	const workAccordions = work.map((w, i) => (
		<WorkAccordion position={w.position} list={w.list} index={i} key={i} />
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
		backgroundColor: 'white',
		padding: '1rem',
		paddingBottom: '3rem'
	},
	workContainer: {
		width: '100%',
		maxWidth: '50rem'
	},
	heading: {
		color: theme.palette.primary.main,
		fontSize: 40,
		textShadow: `1px 1px 1px ${theme.palette.secondary.main}`,
		marginBottom: '1rem'
	},
	title: {
		fontSize: 20,
		textShadow: `0 0 25px ${theme.palette.secondary.light}`,
	},
	description: {
		color: 'white'
	},
	oddAccordion: {
		backgroundColor: theme.palette.primary.main,
		color: 'white'
	},
	evenAccordion: {
		backgroundColor: theme.palette.secondary.main,
		color: 'white'
	},
	oddAccordionDetails: {
		backgroundColor: theme.palette.primary.light,
		color: 'black'
	},
	evenAccordionDetails: {
		backgroundColor: theme.palette.secondary.light,
		color: 'black'
	}
}));

export default Work;