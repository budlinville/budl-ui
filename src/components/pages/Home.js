import React, { useState, useCallback } from 'react';
import {useDispatch } from 'react-redux';

import sphereData from '../../data/spheres';
import Scene from '../three-js/Scene';
import { setOrbitCenter, setCamPos } from '../../store/actions/scene-action';

const style = color => ({
	background: `linear-gradient(${color}, white)`
});

const Home = () => {
	const dispatch = useDispatch();
	const [hoveredSphereId, setHoveredSphereId] = useState(-1);	// id of sphere being hovered over; -1 if none
	const backgroundColor = hoveredSphereId > -1 ? sphereData[hoveredSphereId].color : 'gray';

	// SET CONFIGURATIONS FOR SCENE
	const setSceneState = useCallback(() => {
		const ORBIT_CENTER = [0, 10, 0];
		const CAM_POS = [0, 15, -15];
		dispatch(setOrbitCenter(ORBIT_CENTER));
		dispatch(setCamPos(CAM_POS));
	}, [dispatch]);

	setSceneState();

	return (
		<div style={style(backgroundColor)}>
			<Scene hoveredSphereId={hoveredSphereId} setHoveredSphereId={setHoveredSphereId} />
		</div>
	);
};

export default Home;