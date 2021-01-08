import { combineReducers } from 'redux';

import sceneReducer from './scene';

const rootReducer = combineReducers({
	scene: sceneReducer
});

export default rootReducer;
