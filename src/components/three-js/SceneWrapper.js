import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import sphereData from '../../data/spheres';
import Scene from './Scene';
import { setOrbitCenter, setCamPos, setSceneDimensions } from '../../store/actions/scene';

const style = color => ({
	background: `linear-gradient(white, ${color}, white)`
});

const SceneWrapper = ({ history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const hovering = useSelector(state => state.scene.hovering);
	const backgroundColor = hovering.length ? sphereData[hovering[0].id].color : 'gray';

	const navigate = to => {
		history.push(to);
	};

	// SET CONFIGURATIONS FOR SCENE
	const setSceneState = useCallback(() => {
		const ORBIT_CENTER = [0, 10, 0];
		const CAM_POS = [0, 29, -29];
		const DIMENSIONS = [50, 50, 50];
		dispatch(setOrbitCenter(ORBIT_CENTER));
		dispatch(setCamPos(CAM_POS));
		dispatch(setSceneDimensions(DIMENSIONS))
	}, [dispatch]);

	useEffect(() => setSceneState(), [setSceneState]);

	return (
		<div className={classes.sceneWrapper} style={style(backgroundColor)}>
			<Scene navCallback={navigate} />
		</div>
	);
};

const useStyles = makeStyles({
	sceneWrapper: {
		height: '100%'
	}
});

export default withRouter(SceneWrapper);
