import {
	SET_CAM_POS,
	SET_ORBIT_CENTER,
	SET_SCENE_DIMENSIONS,
	ADD_HOVERED_OBJ,
	REM_HOVERED_OBJ
} from './types';

export const setCamPos = camPos => ({ type: SET_CAM_POS, camPos });
export const setOrbitCenter = center => ({ type: SET_ORBIT_CENTER, center });
export const setSceneDimensions = dimensions => ({ type: SET_SCENE_DIMENSIONS, dimensions });
export const addHoveredObj = obj => ({ type: ADD_HOVERED_OBJ, obj});
export const removeHoveredObj = index => ({ type: REM_HOVERED_OBJ, obj});
