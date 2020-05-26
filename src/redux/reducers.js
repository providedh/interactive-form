import {combineReducers} from 'redux';
import * as actions from './actions';

import {
	initialNavigationState,
	initialUserState,
	initialTaxonomyState,
	initialSourceState,
	initialAnnotationsState
} from './initial_state';

const hasParam = (action, key) => Object.hasOwnProperty.call(action.payload, key);

function userReducer(state=initialUserState, action){
	let newState;

	switch(action.type){
		case actions.UPDATE_USER:
			if(hasParam(action, 'key') && hasParam(action, 'value') && 
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

function annotationsReducer(state=initialAnnotationsState, action){
	let newState = state;

	switch(action.type){
		case actions.ADD_ANNOTATION:
			if(hasParam(action, 'words') && hasParam(action, 'useCase')){
				const {useCase, words} = action.payload
				const id = words.join('_');
				newState = Object.assign({}, state);

				if(!Object.hasOwnProperty.call(newState, useCase)){ newState[useCase] = {} }

				newState[useCase][id] = {words, userCategories: [], providedhCategories: []}
			}
			break;
		case actions.REMOVE_ANNOTATION:
			if(hasParam(action, 'words') && hasParam(action, 'useCase')){
				const {useCase, words} = action.payload
				const id = words.join('_');
				newState = Object.assign({}, state);
				delete newState[useCase][id]
			}
			break;
		case actions.ADD_USER_CATEGORY:
			if(hasParam(action, 'words') && hasParam(action, 'useCase') && hasParam(action, 'category')){
				const {useCase, words, category} = action.payload
				const id = words.join('_')
				if(!newState[useCase][id].userCategories.includes(category)){
					newState = Object.assign({}, state);
					newState[useCase][id].userCategories.push(category)
				}
			}
			break;
		case actions.REMOVE_USER_CATEGORY:
			if(hasParam(action, 'words') && hasParam(action, 'useCase') && hasParam(action, 'category')){
				const {useCase, words, category} = action.payload
				const id = words.join('_')
				if(newState[useCase][id].userCategories.includes(category)){
					newState = Object.assign({}, state);
					const index = newState[useCase][id].userCategories.indexOf(category)
					newState[useCase][id].userCategories.splice(index, 1)
				}
			}
			break;
		case actions.ADD_PROVIDEDH_CATEGORY:
			if(hasParam(action, 'words') && hasParam(action, 'useCase') && hasParam(action, 'category')){
				const {useCase, words, category} = action.payload
				const id = words.join('_')
				if(!newState[useCase][id].providedhCategories.includes(category)){
					newState = Object.assign({}, state);
					newState[useCase][id].providedhCategories.push(category)
				}
			}
			break;
		case actions.REMOVE_PROVIDEDH_CATEGORY:
			if(hasParam(action, 'words') && hasParam(action, 'useCase') && hasParam(action, 'category')){
				const {useCase, words, category} = action.payload
				const id = words.join('_')
				if(newState[useCase][id].providedhCategories.includes(category)){
					newState = Object.assign({}, state);
					const index = newState[useCase][id].providedhCategories.indexOf(category)
					newState[useCase][id].providedhCategories.splice(index, 1)
				}
			}
			break;
	}
	return newState;
}

function sourceReducer(state=initialSourceState, action){
	let newState;

	switch(action.type){
		case actions.UPDATE_SOURCE_CATEGORY:
			if(hasParam(action, 'source') && hasParam(action, 'index') && hasParam(action, 'name')){
				const {source, index, name} = action.payload;

				newState = Object.assign({}, state);
				if(!newState.hasOwnProperty(source)){
					newState[source] = {};
				}
				
				newState[source] = Object.assign({}, 
					newState[source], 
					Object.fromEntries([[index, name]]));
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
	const hasName = action.payload != undefined && action.payload.hasOwnProperty('name')
	const hasIndex = action.payload != undefined && action.payload.hasOwnProperty('index')

	switch(action.type){
		case actions.ADD_CATEGORY:
			if(hasName === true){
				newState = {categories:[...state.categories, action.payload.name], 
						newCategory: '',
						historic: [...state.historic, [...state.categories, action.payload.name]],
						draggedCategory: state.draggedCategory};
			}
			break;
		case actions.REMOVE_CATEGORY:
			if(hasIndex === true){
				newState.categories = state.categories.filter((x,i)=>i!=action.payload.index);
				newState.historic.push(newState.categories)
			}
			break;
		case actions.UPDATE_CATEGORY:
			if(hasName === true && hasIndex === true){
				newState.categories = state.categories.map((x,i)=>i!=action.payload.index?x:action.payload.name);
				newState.historic.push(newState.categories)
			}
			break;
		case actions.UPDATE_NEW_CATEGORY:
			if(hasName === true){
				newState.newCategory = action.payload.name;
			}
			break;
		case actions.SET_DRAGGED_CATEGORY:
			newState.draggedCategory = action.payload.name;
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

export const appReducer = combineReducers({navigation: navigationReducer, annotations: annotationsReducer, user: userReducer, taxonomy: taxonomyReducer, sources: sourceReducer});
