import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { history } from './App';
import Scene from './three-js/SceneWrapper';

const Header = () => {
	const onClickHandler = () => {
		if (!expanded && hovering.length === 0) {
			history.push('/home');
		}
	}
	const classes = useStyles();
	const expanded = useSelector(state => state.app.headerExpanded);
	const hovering = useSelector(state => state.scene.hovering);
	const sceneClassName = expanded
		? classes.headerSceneContainerExpanded
		: classes.headerSceneContainerContracted;
		
	return (
		<div onTouchStart={onClickHandler} onDoubleClick={onClickHandler} className={sceneClassName}>
			<Scene/>
		</div>
	);
};

const useStyles = makeStyles({
	headerSceneContainerExpanded: {
		height: '100vh',
		transition: 'height 0.6s ease-out'
	},
	headerSceneContainerContracted: {
		height: '15vh',
		borderRadius: '0px 0px 8px 8px',
		overflow: 'hidden',
		boxShadow: '0px 3px 10px #ccc',
		transition: 'height 0.3s ease-out',
		'&:hover': {
			height: '30vh'
		}
	}
});

export default Header;