import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import spheres from '../../data/spheres';
import { headerLabelExpand } from '../../constants';

const BottomLabel = () => {
	const classes = useStyles();
	const expanded = useSelector(state => state.app.headerExpanded);
	const hovering = useSelector(state => state.scene.hovering);
	const hoveredSphereId = hovering[0] && hovering[0].id;
	const hoveredSphere = spheres.filter(sphere => sphere.id === hoveredSphereId)[0];

	const getLabelText = () => {
		if (hoveredSphere) {
			return hoveredSphere.name;
		} else if (!expanded) {
			return headerLabelExpand;
		}
		return "";
	};

	const getLabelClass = () => {
		const base = classes.label;
		return !expanded
			? `${base} ${classes.contractedLabel}`
			: `${base} ${classes.expandedLabel}`;
	};

	const getRootContainer = () => expanded
		? `${classes.root} ${classes.expandedRoot}`
		: `${classes.root} ${classes.contractedRoot}`;

	const labelText = getLabelText();
	const labelClass = getLabelClass();
	const rootClass = getRootContainer();

	const dynamicStyle = hoveredSphere ? {
		color: hoveredSphere.color2,
		textShadow: `0 0 5px ${hoveredSphere.color}`
	} : {};
	
	return (
		<div className={rootClass}>
			<Typography className={labelClass} style={dynamicStyle}>
				{ labelText }
			</Typography>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		width: '100%',
		marginTop: '-4em',
		height: '4em'
	},
	expandedRoot: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		[theme.breakpoints.down('sm')]: {
			marginTop: '-10em',
			height: '10em'
		}
	},
	contractedRoot: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	label: {
		color: theme.palette.secondary.main,
		textShadow: `0 0 5px ${theme.palette.primary.dark}`
	},
	expandedLabel: {
		fontSize: '2rem'
	},
	contractedLabel: {
		fontSize: '1.4rem',
		marginRight: '0.5em',
		marginBottom: '0.5em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.85em'
		}
	}
}));

export default BottomLabel;