import React, { useState } from 'react';

import Scene from '../three-js/Scene';

import sphereData from '../../data/spheres';

const style = color => ({
	background: `linear-gradient(${color}, white)`
});

const Home = () => {
	const [hoveredSphereId, setHoveredSphereId] = useState(-1);	// id of sphere being hovered over; -1 if none
	const backgroundColor = hoveredSphereId > -1 ? sphereData[hoveredSphereId].color : 'gray';

	return (
		<div style={style(backgroundColor)}>
			<Scene hoveredSphereId={hoveredSphereId} setHoveredSphereId={setHoveredSphereId} />
		</div>
	);
};

export default Home;