import { SET_THEME, SET_HEADER_EXPANDED } from './types';

export const setTheme = theme => ({ type: SET_THEME, theme });
export const setHeaderExpanded = expanded => ({ type: SET_HEADER_EXPANDED, expanded });