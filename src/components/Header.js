import React from 'react';
import { useLocation } from 'react-router-dom'

import Scene from './three-js/SceneWrapper';

const Header = () => {
	const { pathname } = useLocation();
	const sceneClassName = pathname === '/' || pathname === '/home'
		? 'header-scene-container-expanded'
		: 'header-page-container-contracted';
	return (
		<div className={sceneClassName}>
			{ Scene && <Scene/> }
		</div>
	);
};

export default Header;