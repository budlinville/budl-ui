import React from 'react';
import { useSelector } from 'react-redux';

import { history } from '../App';
import Scene from './three-js/SceneWrapper';

const Header = () => {
	const onClickHandler = () => {
		if (!expanded && hovering.length === 0) {
			history.push('/home');
		}
	}
	const expanded = useSelector(state => state.scene.headerExpanded);
	const hovering = useSelector(state => state.scene.hovering);
	const sceneClassName = expanded
		? 'header-scene-container-expanded'
		: 'header-scene-container-contracted';
	return (
		<div onClick={onClickHandler} className={sceneClassName}>
			<Scene/>
		</div>
	);
};

export default Header;