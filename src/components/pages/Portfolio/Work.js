import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import work from '../../../data/work';

const ListItem = ({ text }) => {
	const classes = useStyles();
	return (
		<div style={{ display: 'flex' }}>
			<div className={classes.listItem}>
				<Typography className={classes.accordionDescription}> { text } </Typography>
			</div>
		</div>
	);
}

const WorkAccordion = ({ company, position, list, index }) => {
	const classes = useStyles();
	const className = index % 2 === 1 ? classes.oddAccordion : classes.evenAccordion;
	const detailsClassName = index % 2 === 1 ? classes.oddAccordionDetails : classes.evenAccordionDetails;
	return(
		<Accordion className={className}>
			<AccordionSummary expandIcon={ <ExpandMoreIcon /> } aria-controls="panel1a-content">
				<Typography className={classes.accordionTitle}> { company } </Typography>
			</AccordionSummary>
			<AccordionDetails className={`${classes.accordionDetail} ${detailsClassName}`}>
				<Typography className={classes.accordionLabel}> { position } </Typography>
				{ list.map( (item, i) => <ListItem key={i} text={item.desc} /> )}
			</AccordionDetails>
		</Accordion>
	);
}

const Work = () => {
	const classes = useStyles();
	const workAccordions = work.map((w, i) => (
		<WorkAccordion company={w.company} position={w.position} list={w.list} index={i} key={i} />
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
		backgroundColor: '#e6e6e6',
		padding: '5rem',
		paddingBottom: '8rem'
	},
	workContainer: {
		width: '100%',
		maxWidth: '50rem'
	},
	heading: {
		color: theme.palette.primary.main,
		fontSize: 40,
		marginBottom: '1rem'
	},
	accordionTitle: {
		fontSize: 20
	},
	accordionLabel: {
		color: 'white',
		fontSize: 25,
		alignSelf: 'center'
	},
	accordionDescription: {
		color: 'white',
		display: 'flex',
		flexDirection: 'column'
	},
	oddAccordion: {
		backgroundColor: theme.palette.primary.main,
		color: 'white'
	},
	evenAccordion: {
		backgroundColor: theme.palette.secondary.main,
		color: 'white'
	},
	accordionDetail: {
		color: 'black',
		display: 'flex',
		flexDirection: 'column'
	},
	oddAccordionDetails: {
		backgroundColor: theme.palette.primary.light
	},
	evenAccordionDetails: {
		backgroundColor: theme.palette.secondary.light
	},
	listItem: {
		flex: 20,
		margin: '0.5rem',
		padding: '0.5rem',
		border: '0.1rem solid white',
		borderRadius: '0.75rem'
	}
}));

export default Work;