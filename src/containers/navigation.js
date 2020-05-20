import {connect} from 'react-redux';

import NavigationManager from '../components/navigation_manager';

import {advancePage, backPage, allowNavigation, disallowNavigation} from 'app_actions';

const mapStateToProps = ({navigation}, ownProps)=>Object.assign({}, ownProps, navigation);

const mapDispatchToProps = (dispatch) => ({
	boundAdvancePage: (payload)=>dispatch(advancePage(payload)),
	boundBackPage: (payload)=>dispatch(backPage(payload)),
	boundAllowNavigation: (payload)=>dispatch(allowNavigation(payload)),
	boundDisallowNavigation: (payload)=>dispatch(disallowNavigation(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationManager);