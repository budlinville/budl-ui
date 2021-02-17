import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { history } from './App';
import Scene from './three-js/SceneWrapper';
import { setTheme } from '../store/actions/app';
import { home } from '../themes';

const Header = () => {
	const onClickHandler = () => {
		if (!expanded && hovering.length === 0) {
			dispatch(setTheme(home));
			history.push('/home');
		}
	}
	const dispatch = useDispatch();
	const classes = useStyles();
	const expanded = useSelector(state => state.app.headerExpanded);
	const hovering = useSelector(state => state.scene.hovering);

	const [hovered, setHovered] = useState(false);

	const sceneClassName = expanded
		? classes.scene
		: classes.sceneAsHeader;

	return (
		<>
			<div onTouchStart={onClickHandler} onDoubleClick={onClickHandler} className={sceneClassName}>
				<Scene onHoverCallback={() => setHovered(true)} onHoverReleaseCallback={() => setHovered(false)} />
			</div>
			{ hovered
				? <div className={classes.spacer30vh}/>
				: <div className={classes.spacer15vh}/>
			}
		</>
	);
};
// TODO : working here on proper header positioning
// rems vs ems
const useStyles = makeStyles({
	scene: {
		height: '100vh',
		transition: 'height 0.6s ease-out'
	},
	sceneAsHeader: {
		position: 'fixed',
		overflow: 'hidden',
		height: '15vh',
		width: '100vw',
		borderRadius: '0px 0px 8px 8px',
		boxShadow: '0px 3px 10px white;',
		transition: 'height 0.3s ease-out',
		'&:hover': {
			height: '30vh'
		}
	},
	spacer15vh: {
		width: '100vw',
		height: '15vh',
		transition: 'height 0.8s ease-out'
	},
	spacer30vh: {
		width: '100vw',
		height: '30vh',
		transition: 'height 0.3s ease-out'
	}
});

export default Header;