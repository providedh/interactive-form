import {connect} from 'react-redux';

import UnannotatedSource from 'app_components/unannotated_source';

import {addAnnotation, removeAnnotation} from 'app_actions';

const mapStateToProps = ({annotations}, ownProps)=>{
	const data = {annotations};
	return Object.assign({}, ownProps, data)
};

const mapDispatchToProps = (dispatch) => ({
	boundAddAnnotation: payload=>dispatch(addAnnotation(payload)),
	boundRemoveAnnotation: payload=>dispatch(removeAnnotation(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UnannotatedSource);