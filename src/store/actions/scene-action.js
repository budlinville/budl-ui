import { SET_CAM_POS, SET_ORBIT_CENTER } from './types';

export const setCamPos = camPos => ({ type: SET_CAM_POS, camPos });
export const setOrbitCenter = center => ({ type: SET_ORBIT_CENTER, center });