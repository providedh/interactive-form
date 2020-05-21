import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import CurrentState from 'app_containers/current_state';

export default function Component(props) {
    return(
	    <div className="my-3 container-fluid">
	    	<h3 className="mt-3">Before you submit the survey</h3>
	    	<p>Survey answers can't be changed once they are sent.</p>
	    	<CurrentState />
    	</div>
    	);
}
