
// Action constants

export const ADVANCE_PAGE = 'ADVANCE_PAGE';
export const BACK_PAGE = 'BACK_PAGE';
export const ALLOW_NAVIGATION = 'ALLOW_NAVIGATION';
export const DISALLOW_NAVIGATION = 'DISALLOW_NAVIGATION';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_NEW_CATEGORY = 'UPDATE_NEW_CATEGORY';

export const UPDATE_CERTAINTY_CATEGORY = 'UPDATE_CERTAINTY_CATEGORY';
export const SET_DRAGGED_CATEGORY = 'SET_DRAGGED_CATEGORY';

export const UPDATE_USER = 'UPDATE_USER';

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

export const updateCertaintyCategory = createActionGenerator(UPDATE_CERTAINTY_CATEGORY);
export const setDraggedCategory = createActionGenerator(SET_DRAGGED_CATEGORY)

export const updateUser = createActionGenerator(UPDATE_USER);