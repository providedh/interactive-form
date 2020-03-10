import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component(props) {

    return(
	    <div className="my-3 container-fluid">
	    	<div>
	    		<form>
		    		<div className="form-group row">
					    <label htmlFor="inputEmail3" className="col-6 col-lg-2 col-form-label">Age</label>
					    <div className="col-6 col-lg-10">
					      <input type="email" className="form-control" id="inputEmail3"/>
					    </div>
				  	</div>
				  	<div className="form-group row">
					    <label htmlFor="inputEmail31" className="col-6 col-lg-2 col-form-label">Sex</label>
					    <div className="col-6 col-lg-10">
					      <input type="email" className="form-control" id="inputEmail31"/>
					    </div>
				  	</div>
				  	<div className="form-group row">
					    <label htmlFor="inputEmail32" className="col-6 col-lg-2 col-form-label">Highest education</label>
					    <div className="col-6 col-lg-10">
					      <input type="email" className="form-control" id="inputEmail32"/>
					    </div>
				  	</div>
				  	<div className="form-group row">
					    <label htmlFor="inputEmail34" className="col-6 col-lg-2 col-form-label">Work/research field</label>
					    <div className="col-6 col-lg-10">
					      <input type="email" className="form-control" id="inputEmail34"/>
					    </div>
				  	</div>
				  	<fieldset className="form-group">
					    <div className="row">
					      <legend className="col-form-label col-6 col-lg-2 pt-0">Previously (or currently) working at research</legend>
					      <div className="col-6 col-lg-10">
					        <div className="form-check">
					          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked/>
					          <label className="form-check-label" htmlFor="gridRadios1">
					            Yes
					          </label>
					        </div>
					        <div className="form-check">
					          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
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
					          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios12" value="option1" defaultChecked/>
					          <label className="form-check-label" htmlFor="gridRadios21">
					            Yes
					          </label>
					        </div>
					        <div className="form-check">
					          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios22" value="option2"/>
					          <label className="form-check-label" htmlFor="gridRadios22">
					            No
					          </label>
					        </div>
					      </div>
					    </div>
				  	</fieldset>
				</form>
	    	</div>
	    	<h3 className="mt-5 text-center">Why we ask for this information</h3>
	    	<ul className="mx-4">
	    		<li className="m-3">
			        <h4 className="d-inline">Your work/research field conditions</h4>
			        <p className="d-inline ml-2"><span>what terms and lexicon you manage regarding uncertainty.</span></p>
	    		</li>
	    		<li className="m-3">
			        <h4 className="d-inline">The experiment must seek statistically relevant results.</h4>
			        <p className="d-inline ml-2"><span>Therefore we must check that the distribution of people 
			        	for the different conditional factors we identified are equally distributed.</span></p>
	    		</li>
	    		<li className="m-3">
			        <h4 className="d-inline">Uncertainty can have many names</h4>
			        <p className="d-inline ml-2"><span>and creating a taxonomy for it is a task that must take
			        	into account the users.</span></p>
	    		</li>
	    	</ul>
    	</div>
    	);
}
