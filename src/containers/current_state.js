import {connect} from 'react-redux';

import SurveyPreview from '../components/survey_preview';

const mapStateToProps = (state)=>Object.assign({}, {state});

export default connect(
	mapStateToProps
)(SurveyPreview);