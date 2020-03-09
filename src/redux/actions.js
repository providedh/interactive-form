
// Action constants

export const ADVANCE_PAGE = 'ADVANCE_PAGE';
export const BACK_PAGE = 'BACK_PAGE';
export const ALLOW_NAVIGATION = 'ALLOW_NAVIGATION';
export const DISALLOW_NAVIGATION = 'DISALLOW_NAVIGATION';


// Action generators

function createActionGenerator(type) {
	return (payload, error=false)=>({type, payload, error});
}

export const advancePage = createActionGenerator(ADVANCE_PAGE);
export const backPage = createActionGenerator(BACK_PAGE);
export const allowNavigation = createActionGenerator(ALLOW_NAVIGATION);
export const disallowNavigation = createActionGenerator(DISALLOW_NAVIGATION);