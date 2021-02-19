import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import '../../../styles/ag-grid/index.css';

import { skillsColumnDefs } from '../../../constants/pages/portfolio';
import skills from '../../../data/skills';

const Skills = () => {
	const onGridReady = params => {
		setGridApi(params.api);
	};

	const classes = useStyles();
	const [gridApi, setGridApi] = useState(null);
	//const [gridColumnApi, setGridColumnApi] = useState(null);

	useEffect(() => {
		gridApi && gridApi.sizeColumnsToFit();
	}, [gridApi]);

	return (
		<div className={classes.rootContainer}>
			<Typography className={classes.title}>Technical Skills</Typography>
			<div className={classes.gridContainer}>
				<div className={`ag-theme-material ${classes.grid}`}>
					<AgGridReact
						onGridReady={onGridReady}
						rowData={skills}
						columnDefs={skillsColumnDefs}/>
				</div>
			</div>
		</div>
	);
};

// dynamic coloring with themes not working with grid.. using static colors :'(
const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '35rem',
		backgroundColor: theme.palette.secondary.dark,
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'center',
			alignItems: 'center'
    }
	},
	title: {
		marginBottom: '2rem',
		color: 'white',
		fontSize: 40,
		textShadow: `2px 2px 5px ${theme.palette.primary.dark}`,
		[theme.breakpoints.down('sm')]: {
			margin: '1rem'
    }
	},
	gridContainer: {
		height: '100%',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '50em',
			height: '400px',
			borderRadius: '1em',
			overflow: 'hidden',
			boxShadow: `0 0 2px ${theme.palette.primary.dark},
				0 0 5px ${theme.palette.primary.main},
				0 0 15px ${theme.palette.primary.light}`,
    }
	},
	grid: {
		height: '100%',
		width: '100%'
	}
}));

export default Skills;