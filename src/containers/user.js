import React from 'react';
import {connect} from 'react-redux';

import {updateUser} from 'app_actions';

const mapStateToProps = ({user})=>({user});

const mapDispatchToProps = (dispatch) => ({
	boundUpdateUser: payload=>dispatch(updateUser(payload)),
});

function User({user, boundUpdateUser}) {
	const setValue = (key, value)=>boundUpdateUser({key, value});

    return(
		<form className="px-5">
    		<div className="form-group row">
			    <label htmlFor="age" className="col-6 col-lg-2 col-form-label">Age</label>
			    <div className="col-6 col-lg-10">
			      <input type="number" value={user.age} onChange={e=>setValue('age', e.target.value)} className="form-control" id="age"/>
			    </div>
		  	</div>
		  	<div className="form-group row">
			    <label htmlFor="gender" className="col-6 col-lg-2 col-form-label">gender</label>
			    <div className="col-6 col-lg-10">
				    <select id="gender" className="form-control" value={user.gender} onChange={e=>setValue('gender', e.target.value)}>
				        <option>Unspecified</option>
				        <option>Male</option>
				        <option>Female</option>
				        <option>Other</option>
				    </select>
				</div>
		  	</div>
		  	<div className="form-group row">
			    <label htmlFor="education" className="col-6 col-lg-2 col-form-label">Highest education</label>
			    <div className="col-6 col-lg-10">
			      <input type="text" value={user.education} onChange={e=>setValue('education', e.target.value)} className="form-control" id="education"/>
			    </div>
		  	</div>
		  	<div className="form-group row">
			    <label htmlFor="field" className="col-6 col-lg-2 col-form-label">Work/research field</label>
			    <div className="col-6 col-lg-10">
			      <input type="text" value={user.field} onChange={e=>setValue('field', e.target.value)} className="form-control" id="field"/>
			    </div>
		  	</div>
		  	<fieldset className="form-group">
			    <div className="row">
			      <legend className="col-form-label col-6 col-lg-2 pt-0">Previously (or currently) working at research</legend>
			      <div className="col-6 col-lg-10">
			        <div className="form-check">
			          <input className="form-check-input" type="radio" 
			          	checked={user.researcher == 'yes'}
			          	onChange={e=>setValue('researcher', e.target.value)}
			          	name="researcher" id="gridRadios1" value="yes"/>
			          <label className="form-check-label" htmlFor="gridRadios1">
			            Yes
			          </label>
			        </div>
			        <div className="form-check">
			          <input className="form-check-input" type="radio" 
			          	checked={user.researcher == 'no'}
			          	onChange={e=>setValue('researcher', e.target.value)}
			          	name="researcher" id="gridRadios2" value="no"/>
			          <label className="form-check-label" htmlFor="gridRadios2">
			            No
			          </label>
			        </div>
			      </div>
			    </div>
		  	</fieldset>
		  	<fieldset className="form-group">
			    <div className="row">
			      <legend className="col-form-label col-6 col-lg-2 pt-0">Prior knowledge on Digital Humanities</legend>
			      <div className="col-6 col-lg-10">
			        <div className="form-check">
			          <input className="form-check-input" type="radio"
			          	checked={user.previousDH == 'no'}
			          	onChange={e=>setValue('previousDH', e.target.value)}
			          	name="previousDH" id="gridRadios12" value="option1"/>
			          <label className="form-check-label" htmlFor="gridRadios21">
			            Yes
			          </label>
			        </div>
			        <div className="form-check">
			          <input className="form-check-input" type="radio" 
			          	checked={user.previousDH == 'no'}
			          	onChange={e=>setValue('previousDH', e.target.value)}
			          	name="previousDH" id="gridRadios22" value="option2"/>
			          <label className="form-check-label" htmlFor="gridRadios22">
			            No
			          </label>
			        </div>
			      </div>
			    </div>
		  	</fieldset>
		</form>
    	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);