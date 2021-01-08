import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import sphereData from '../../data/spheres';
import Scene from '../three-js/Scene';
import { setOrbitCenter, setCamPos, setSceneDimensions } from '../../store/actions/scene';

const style = color => ({
	background: `linear-gradient(white, ${color}, white)`
});

const Home = () => {
	const dispatch = useDispatch();
	const hovering = useSelector(state => state.scene.hovering);
	const backgroundColor = hovering.length ? sphereData[hovering[0].id].color : 'gray';

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
			<Scene />
		</div>
	);
};

export default Home;