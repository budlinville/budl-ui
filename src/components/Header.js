import React from 'react';

import Scene from './three-js/SceneWrapper';

const Header = () => {
	/*
	const { pathname } = useLocation();
	const sceneClassName = pathname === '/' || pathname === '/home'
		? 'header-scene-container-expanded'
		: 'header-page-container-contracted';
		*/
		const sceneClassName = 'header-scene-container-expanded';
	return (
		<div className={sceneClassName}>
			<Scene/>
		</div>
	);
};

export default Header;