
// Action constants

export const ADVANCE_PAGE = 'ADVANCE_PAGE';
export const BACK_PAGE = 'BACK_PAGE';
export const ALLOW_NAVIGATION = 'ALLOW_NAVIGATION';
export const DISALLOW_NAVIGATION = 'DISALLOW_NAVIGATION';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_NEW_CATEGORY = 'UPDATE_NEW_CATEGORY';

export const UPDATE_SOURCE_CATEGORY = 'UPDATE_SOURCE_CATEGORY';
export const SET_DRAGGED_CATEGORY = 'SET_DRAGGED_CATEGORY';

export const UPDATE_USER = 'UPDATE_USER';

export const ADD_ANNOTATION = 'ADD_ANNOTATION'; 
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';
export const ADD_USER_CATEGORY = 'ADD_USER_CATEGORY';
export const REMOVE_USER_CATEGORY = 'REMOVE_USER_CATEGORY';
export const ADD_PROVIDEDH_CATEGORY = 'ADD_PROVIDEDH_CATEGORY';
export const REMOVE_PROVIDEDH_CATEGORY = 'REMOVE_PROVIDEDH_CATEGORY';

// Action generators

function createActionGenerator(type) {
	return (payload, error=false)=>({type, payload, error});
}

export const advancePage = createActionGenerator(ADVANCE_PAGE);
export const backPage = createActionGenerator(BACK_PAGE);
export const allowNavigation = createActionGenerator(ALLOW_NAVIGATION);
export const disallowNavigation = createActionGenerator(DISALLOW_NAVIGATION);

export const addCategory = createActionGenerator(ADD_CATEGORY);
export const removeCategory = createActionGenerator(REMOVE_CATEGORY);
export const updateCategory = createActionGenerator(UPDATE_CATEGORY);
export const updateNewCategory = createActionGenerator(UPDATE_NEW_CATEGORY);

export const updateSourceCategory = createActionGenerator(UPDATE_SOURCE_CATEGORY);
export const setDraggedCategory = createActionGenerator(SET_DRAGGED_CATEGORY)

export const updateUser = createActionGenerator(UPDATE_USER);

export const addAnnotation = createActionGenerator(ADD_ANNOTATION);
export const removeAnnotation = createActionGenerator(REMOVE_ANNOTATION);
export const addUserCategory = createActionGenerator(ADD_USER_CATEGORY);
export const removeUserCategory = createActionGenerator(REMOVE_USER_CATEGORY);
export const addProvidedhCategory = createActionGenerator(ADD_PROVIDEDH_CATEGORY);
export const removeProvidedhCategory = createActionGenerator(REMOVE_PROVIDEDH_CATEGORY);