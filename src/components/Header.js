import React from 'react';
import { useLocation } from 'react-router-dom'

const Header = ({ Scene }) => {
	const location = useLocation();
  console.log(location.pathname);
	const sceneExpanded = false;
	const sceneClassName = sceneExpanded
		? 'header-scene-container-expanded'
		: 'header-page-container-contracted';
	return (
		<div className={sceneClassName}>
			{ Scene && <Scene/> }
		</div>
	);
};

export default Header;