import {connect} from 'react-redux';

import TextSource from '../components/text_source';

import {updateSourceCategory} from 'app_actions';

const mapStateToProps = (state, ownProps)=>{
	const data = {
		draggedCategory: state.taxonomy.draggedCategory,
		categories: state.sources.hasOwnProperty(ownProps.sourceName)?state.sources[ownProps.sourceName]:{}
	};
	return Object.assign({}, ownProps, data)
};

const mapDispatchToProps = (dispatch) => ({
	boundUpdateSourceCategory: payload=>dispatch(updateSourceCategory(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TextSource);