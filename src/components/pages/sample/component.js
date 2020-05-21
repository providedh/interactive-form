import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Sources from 'app_sources';
import TaxonomyEditor from 'app_containers/taxonomy'
import TextSource from 'app_containers/text_source';

export default function Component({useCaseType, useCaseSource}) {
	const types = ['Gaps', 'Credibility'],
		categories = {
			0: 'Gaps',
			1: 'Gaps',
			2: 'Gaps',
			3: 'Credibility',
			4: 'Gaps',
			5: 'Credibility',
		};

    return(
	    <div className="my-3 container-fluid">
	    	<h3 className="mt-3">How to fill the survey</h3>
	    	<p>Create a taxonomy (on the left) and assign it to the documents (on the right).</p>
	    	<div className="row">
	    		<div className="col-5 bg-blue">
	    			<TaxonomyEditor freezedCategories={types} freezed={true} editable={false}/>
	    		</div>
	    		<div className="col-7 position-relative">
	    			<TextSource sourceName='text_1' source={Sources.text_1} categories={categories}/>
	    			<div className={styles.arc}></div>
	    			<div className={styles.pointer}></div>
	    			<div className={styles.explanation}>
	    				Text fields for the categories are draggable. They
	    				are assigned to uncertain pieces by droping them
	    				in the delimited areas.
	    			</div>
			    	<li className={`shadow ${styles.dragExample}`}>
						<input className="form-control" type="text" disabled={true} value='Gaps'/>
					</li>
	    		</div>
	    	</div>
    	</div>
    	);
}
