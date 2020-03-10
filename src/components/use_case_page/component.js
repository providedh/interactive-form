import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Sources from 'app_sources';
import {Taxonomy, TextSource} from 'app_containers';

export default function Component({useCaseType, useCaseSource}) {
	

    return(
	    <div className="my-3 container-fluid">
	    	<h3 className="mt-3">Before you submit the survey</h3>
	    	<p>Survey answers can't be changed once they are sent.</p>
	    	<div className="row">
	    		<div className="col-5 bg-blue">
	    			<Taxonomy />
	    		</div>
	    		<div className="col-7">
	    			<TextSource source={Sources[useCaseSource]} categories={{2: 'Gaps'}}/>
	    		</div>
	    	</div>
    	</div>
    	);
}
