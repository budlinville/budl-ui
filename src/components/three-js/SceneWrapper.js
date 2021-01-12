import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import sphereData from '../../data/spheres';
import Scene from './Scene';
import { setOrbitCenter, setCamPos, setSceneDimensions } from '../../store/actions/scene';
import { history } from '../../App';

const style = color => ({
	background: `linear-gradient(white, ${color}, white)`
});

const SceneWrapper = () => {
	const dispatch = useDispatch();
	const hovering = useSelector(state => state.scene.hovering);
	const backgroundColor = hovering.length ? sphereData[hovering[0].id].color : 'gray';

	const navigate = useCallback(to => {
		console.log('TODO: header is not changing size after navigation');
		history.push(to);
	}, []);

	// SET CONFIGURATIONS FOR SCENE
	const setSceneState = useCallback(() => {
		const ORBIT_CENTER = [0, 10, 0];
		const CAM_POS = [0, 26, -26];
		const DIMENSIONS = [50, 50, 50];
		dispatch(setOrbitCenter(ORBIT_CENTER));
		dispatch(setCamPos(CAM_POS));
		dispatch(setSceneDimensions(DIMENSIONS))
	}, [dispatch]);

	useEffect(() => setSceneState(), [setSceneState]);

	return (
		<div className='scene-wrapper' style={style(backgroundColor)}>
			<Scene navCallback={navigate} />
		</div>
	);
};

export default SceneWrapper;