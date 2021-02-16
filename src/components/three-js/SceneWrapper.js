import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import Scene from './Scene';
import { setOrbitCenter, setCamPos, setSceneDimensions } from '../../store/actions/scene';

const SceneWrapper = ({ history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const theme = useTheme();

	const navigate = to => {
		history.push(to);
	};

	const style = useCallback(() => ({
		background: `linear-gradient(
			${theme.palette.secondary.light} -5%,
			${theme.palette.primary.main} 50%,
			${theme.palette.primary.dark} 105%
		)`
	}), [theme]);

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
		<div className={classes.sceneWrapper} style={style()}>
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
