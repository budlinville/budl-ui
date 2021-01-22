import { combineReducers } from 'redux';

import appReducer from './app';
import sceneReducer from './scene';

const rootReducer = combineReducers({
	scene: sceneReducer,
	app: appReducer
});

export default rootReducer;
