import {connect} from 'react-redux';

import UncategorizedSource from 'app_components/uncategorized_source';

import {addUserCategory, removeUserCategory} from 'app_actions';

const mapStateToProps = ({annotations, taxonomy}, ownProps)=>{
	const data = {annotations, draggedCategory: taxonomy.draggedCategory};
	return Object.assign({}, ownProps, data)
};

const mapDispatchToProps = (dispatch) => ({
	boundAddUserCategory: payload=>dispatch(addUserCategory(payload)),
	boundRemoveUserCategory: payload=>dispatch(removeUserCategory(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UncategorizedSource);