import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import sphereData from '../../data/spheres';
import Scene from './Scene';
import { setOrbitCenter, setCamPos, setSceneDimensions } from '../../store/actions/scene';

const SceneWrapper = ({ history, onHoverCallback, onHoverReleaseCallback }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const theme = useTheme();
	const hovering = useSelector(state => state.scene.hovering);

	const PRIM_COLOR = hovering.length ? sphereData[hovering[0].id].color : theme.palette.primary.main;
	const PRIM_COLOR_DARK = hovering.length ? sphereData[hovering[0].id].color : theme.palette.primary.dark;
	const SEC_COLOR = hovering.length ? sphereData[hovering[0].id].color2 : theme.palette.secondary.light;

	const navigate = to => {
		history.push(to);
	};

	const style = useCallback(() => ({
		background: `linear-gradient(
			${SEC_COLOR} -5%,
			${PRIM_COLOR} 50%,
			${PRIM_COLOR_DARK} 105%
		)`
	}), [SEC_COLOR, PRIM_COLOR, PRIM_COLOR_DARK]);

	// SET CONFIGURATIONS FOR SCENE
	const setSceneState = useCallback(() => {
		const ORBIT_CENTER = [0, 10, 0];
		const CAM_POS = [0, 28, -28];
		const DIMENSIONS = [50, 50, 50];
		dispatch(setOrbitCenter(ORBIT_CENTER));
		dispatch(setCamPos(CAM_POS));
		dispatch(setSceneDimensions(DIMENSIONS))
	}, [dispatch]);

	useEffect(() => setSceneState(), [setSceneState]);

	return (
		<div
			className={classes.sceneWrapper}
			style={style()}
			onMouseEnter={() => onHoverCallback()}
			onMouseLeave={() => onHoverReleaseCallback()}>
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
