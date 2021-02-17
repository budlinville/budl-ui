import { SET_THEME, SET_HEADER_EXPANDED } from '../actions/types';
import { home } from '../../themes';

const initialState = {
	theme: home,
	headerExpanded: true
};

const appReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_THEME:
			return {
				...state,
				theme: action.theme
			}
		case SET_HEADER_EXPANDED:
			return {
				...state,
				headerExpanded: action.expanded
			}
		default:
			return state;
	}
};

export default appReducer;