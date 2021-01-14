import {
	SET_CAM_POS,
	SET_ORBIT_CENTER,
	SET_SCENE_DIMENSIONS,
	ADD_HOVERED_OBJ,
	REM_HOVERED_OBJ,
	SET_HEADER_EXPANDED
} from '../actions/types';

const initialState = {
	camera: {
		position: [0, 15, -15],
	},
	center: {
		position: [0, 10, 0]
	},
	dimensions: {x: 50, y: 50, z: 50},
	hovering: [],
	buttonPressed: false,
	headerExpanded: false
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
				hovering: state.hovering.concat(action.obj)
			};
		case REM_HOVERED_OBJ:
			const newHovering = [...state.hovering];
			const index = state.hovering.indexOf(obj => obj.id === action.id);
			newHovering.splice(index, 1);
			return {
				...state,
				hovering: newHovering
			};
		case SET_HEADER_EXPANDED:	// TODO : move this out of scene.js
			return {
				...state,
				headerExpanded: action.expanded
			}
		default:
			return state;
	}
};

export default sceneReducer;
