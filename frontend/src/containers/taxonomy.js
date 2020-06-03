import {connect} from 'react-redux';

import TaxonomyEditor from '../components/taxonomy_editor';

import {addCategory, removeCategory, updateCategory, updateNewCategory, setDraggedCategory} from 'app_actions';

const mapStateToProps = ({taxonomy}, ownProps)=>Object.assign({}, ownProps, taxonomy);

const mapDispatchToProps = (dispatch) => ({
	boundAddCategory: payload=>dispatch(addCategory(payload)),
	boundRemoveCategory: payload=>dispatch(removeCategory(payload)),
	boundUpdateCategory: payload=>dispatch(updateCategory(payload)),
	boundUpdateNewCategory: payload=>dispatch(updateNewCategory(payload)),
	boundSetDraggedCategory: payload=>dispatch(setDraggedCategory(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaxonomyEditor);