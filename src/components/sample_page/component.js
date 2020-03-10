import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import {TaxonomyEditor} from 'app_components';

export default function Component({useCaseType, useCaseSource}) {
	const categories = ['Gaps', 'Credibility']
    return(
	    <div className="my-3 container">
	    	<h3 className="mt-3">An example on how to fill the survey</h3>
	    	<p>Creating a taxonomy and assigning categories to the document's uncertain portions.</p>
	    	<div className="row">
	    		<div className="col-5 bg-blue">
	    			<TaxonomyEditor categories={categories} freezed={true} />
	    		</div>
	    		<div className="col-7">
	    		</div>
	    	</div>
    	</div>
    	);
}
