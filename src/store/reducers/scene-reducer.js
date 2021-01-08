import {
	SET_CAM_POS,
	SET_ORBIT_CENTER,
	SET_SCENE_DIMENSIONS,
	ADD_HOVERED_OBJ,
	REM_HOVERED_OBJ
} from '../actions/types';

const initialState = {
	camera: {
		position: [0, 15, -15],
	},
	center: {
		position: [0, 10, 0]
	},
	dimensions: {x: 50, y: 50, z: 50},
	hovered: []
};

const sceneReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_CAM_POS:
			return {
				...state,
				camera: {
					//...state.camera,
					position: action.camPos
				}
			};
		case SET_ORBIT_CENTER:
			return {
				...state,
				center: {
					//...state.center,
					position: action.center
				}
			};
		case SET_SCENE_DIMENSIONS:
			return {
				...state,
				dimensions: {
					...state.dimensions,
					x: action.dimensions[0],
					y: action.dimensions[1],
					z: action.dimensions[2]
				}
			}
		case ADD_HOVERED_OBJ:
			return {
				...state,
				hovered: state.hovered.concat(action.obj)
			};
		case REM_HOVERED_OBJ:
			return {
				...state,
				// TODO : This will create a new array; maybe change
				hovered: state.items.filter(obj => obj.id === action.id)
			};
		default:
			return state;
	}
};

export default sceneReducer;
