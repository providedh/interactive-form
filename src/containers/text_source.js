import {connect} from 'react-redux';

import TextSource from '../components/text_source';

//import {advancePage, backPage, allowNavigation, disallowNavigation} from 'app_actions';

const mapStateToProps = ({taxonomy}, ownProps)=>Object.assign({}, ownProps, {draggedCategory: taxonomy.draggedCategory});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TextSource);