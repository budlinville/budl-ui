import React from 'react';
import { useSelector } from 'react-redux';

import Scene from './three-js/SceneWrapper';

const Header = () => {
	const expanded = useSelector(state => state.scene.headerExpanded);
	const sceneClassName = expanded
		? 'header-scene-container-expanded'
		: 'header-scene-container-contracted';
	return (
		<div className={sceneClassName}>
			<Scene/>
		</div>
	);
};

export default Header;