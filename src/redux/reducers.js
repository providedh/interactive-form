import {combineReducers} from 'redux';
import {ADVANCE_PAGE, BACK_PAGE, ALLOW_NAVIGATION, DISALLOW_NAVIGATION} from './actions';

const initialNavigationState = {
	current: 0,
	allowNavigation: true,
	info: ''
}

function navigationReducer(state=initialNavigationState, action){
	let newState;

	switch(action.type){
		case ADVANCE_PAGE:
			newState = {current: state.current+1, allowNavigation: false, info: ''};
			break;
		case BACK_PAGE:
			newState = {current: state.current-1, allowNavigation: true, info: ''};
			break;
		case ALLOW_NAVIGATION:
			newState = {current: state.current, allowNavigation: true, info: ''};
			break;
		case DISALLOW_NAVIGATION:
			const info = action.payload.hasOwnProperty('info')?action.payload.info:'';
			newState = {current: state.current, allowNavigation: false, info };
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}

export const appReducer = combineReducers({navigation: navigationReducer});