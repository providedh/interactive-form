import {connect} from 'react-redux';

import UncategorizedSource from 'app_components/uncategorized_source';

import {addUserCategory, removeUserCategory} from 'app_actions';

const mapStateToProps = ({annotations}, ownProps)=>{
	const data = {annotations};
	return Object.assign({}, ownProps, data)
};

const mapDispatchToProps = (dispatch) => ({
	addUserCategory: payload=>dispatch(addUserCategory(payload)),
	removeUserCategory: payload=>dispatch(removeUserCategory(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UncategorizedSource);