import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import User from 'app_containers/user';

export default function Component(props) {

    return(
	    <div className="container-fluid">
	    	<h3 className="mt-3">User's details</h3>
	    	<div>
	    		<User />
	    	</div>
	    	<h3 className="mt-2 text-center">Why we ask for this information</h3>
	    	<ul className="mx-4">
	    		<li className="m-3">
			        <h5 className="d-inline">Your work/research field conditions</h5>
			        <p className="d-inline ml-2"><span>what terms and lexicon you manage regarding uncertainty.</span></p>
	    		</li>
	    		<li className="m-3">
			        <h5 className="d-inline">The experiment must seek statistically relevant results.</h5>
			        <p className="d-inline ml-2"><span>Therefore we must check that the distribution of people 
			        	for the different conditional factors we identified are equally distributed.</span></p>
	    		</li>
	    		<li className="m-3">
			        <h5 className="d-inline">Uncertainty can have many names</h5>
			        <p className="d-inline ml-2"><span>and creating a taxonomy for it is a task that must take
			        	into account the users.</span></p>
	    		</li>
	    	</ul>
    	</div>
    	);
}
