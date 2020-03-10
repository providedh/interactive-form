import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import {CurrentState} from 'app_containers';

export default function Component(props) {

    return(
	    <div className="my-3 container-fluid">
	    	<h3 className="mt-3">Before you submit the survey</h3>
	    	<p>Survey answers can't be changed once they are sent.</p>
	    	<CurrentState />
	    	<form className="d-flex justify-content-center">
	    		<button type="submit" className="btn btn-primary">Submit your responses</button>
			</form>
    	</div>
    	);
}
