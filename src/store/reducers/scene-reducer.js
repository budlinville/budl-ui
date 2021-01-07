import { SET_CAM_POS, SET_ORBIT_CENTER } from '../actions/types';

const initialState = {
	camera: {
		position: [0, 15, -15],
	},
	center: {
		position: [0, 10, 0]
	}
};

const sceneReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_CAM_POS:
			return {
				...state,
				camera: {
					...state.camera,
					position: action.camPos
				}
			};
		case SET_ORBIT_CENTER:
			return {
				...state,
				center: {
					...state.center,
					position: action.center
				}
			};
		default:
			return state;
	}
};

export default sceneReducer;