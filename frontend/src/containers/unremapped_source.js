import {connect} from 'react-redux';

import UnremappedSource from 'app_components/unremapped_source';

import {addProvidedhCategory, removeProvidedhCategory} from 'app_actions';

const mapStateToProps = ({annotations, taxonomy}, ownProps)=>{
	const data = {annotations, draggedCategory: taxonomy.draggedCategory};
	return Object.assign({}, ownProps, data)
};

const mapDispatchToProps = (dispatch) => ({
	boundAddProvidedhCategory: payload=>dispatch(addProvidedhCategory(payload)),
	boundRemoveProvidedhCategory: payload=>dispatch(removeProvidedhCategory(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UnremappedSource);