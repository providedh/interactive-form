import {combineReducers} from 'redux';
import * as actions from './actions';

import {initialNavigationState, initialUserState, initialTaxonomyState, initialUseCasesState} from './initial_state';

function userReducer(state=initialUserState, action){
	let newState;

	switch(action.type){
		case actions.UPDATE_USER:
			if(action.payload.hasOwnProperty('key') && 
					action.payload.hasOwnProperty('value') && 
					state.hasOwnProperty(action.payload.key)){

				newState = Object.assign({}, state);
				newState[action.payload.key] = action.payload.value;
			}
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}

function taxonomyReducer(state=initialTaxonomyState, action){
	let newState = Object.assign({}, state);

	const hasName = action.payload != undefined && action.payload.hasOwnProperty('name'),
		hasIndex = action.payload != undefined && action.payload.hasOwnProperty('index');
	switch(action.type){
		case actions.ADD_CATEGORY:
			if(hasName === true)
				newState = {categories:[...state.categories, action.payload.name], newCategory: ''};
			break;
		case actions.REMOVE_CATEGORY:
			if(hasIndex === true){
				newState.categories = state.categories.filter((x,i)=>i!=action.payload.index);
			}
			break;
		case actions.UPDATE_CATEGORY:
			if(hasName === true && hasIndex === true){
				newState.categories = state.categories.map((x,i)=>i!=action.payload.index?x:action.payload.name);
			}
			break;
		case actions.UPDATE_NEW_CATEGORY:
			if(hasName === true){
				newState.newCategory = action.payload.name;
			}
			break;
	}
	return newState;
}

function navigationReducer(state=initialNavigationState, action){
	let newState;

	switch(action.type){
		case actions.ADVANCE_PAGE:
			newState = {current: state.current+1, allowNavigation: false, info: ''};
			break;
		case actions.BACK_PAGE:
			newState = {current: state.current-1, allowNavigation: true, info: ''};
			break;
		case actions.ALLOW_NAVIGATION:
			newState = {current: state.current, allowNavigation: true, info: ''};
			break;
		case actions.DISALLOW_NAVIGATION:
			const info = action.payload.hasOwnProperty('info')?action.payload.info:'';
			newState = {current: state.current, allowNavigation: false, info };
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}

export const appReducer = combineReducers({navigation: navigationReducer, user: userReducer, taxonomy: taxonomyReducer});