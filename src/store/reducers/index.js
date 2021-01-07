import { combineReducers } from 'redux';

import sceneReducer from './scene-reducer';

const rootReducer = combineReducers({
	scene: sceneReducer
});

export default rootReducer;