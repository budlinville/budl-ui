import React, { useState, useCallback, useEffect } from 'react';
import {useDispatch } from 'react-redux';

import sphereData from '../../data/spheres';
import Scene from '../three-js/Scene';
import { setOrbitCenter, setCamPos, setSceneDimensions } from '../../store/actions/scene-action';

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
		const CAM_POS = [0, 26, -26];
		const DIMENSIONS = [50, 50, 50];
		dispatch(setOrbitCenter(ORBIT_CENTER));
		dispatch(setCamPos(CAM_POS));
		dispatch(setSceneDimensions(DIMENSIONS))
	}, [dispatch]);

	useEffect(() => setSceneState());

	return (
		<div style={style(backgroundColor)}>
			<Scene hoveredSphereId={hoveredSphereId} setHoveredSphereId={setHoveredSphereId} />
		</div>
	);
};

export default Home;