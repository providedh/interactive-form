import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Sources from 'app_sources';
import UncategorizedSource from 'app_containers/uncategorized_source';
import Taxonomy from 'app_containers/taxonomy';

export default function Component({title, description, useCase, useCaseType, useCaseSource}) {
	
  return(
    <div className="my-3 container-fluid">
    	<h3 className="mt-3">{title}</h3>
    	<p>{description}</p>
    	<div className={`row ${styles.container}`}>
    		<div className="col-5 bg-blue">
		    	<p>
		    		Uncertainty can be categorized to facilitate reasoning about its source. Such
		    		information could be used by other readers or for automatic analysis.
		    		<br/>
		    		Use the below editable taxonomy for this task. Change, add
		    		or remove categories as needed and assign them to the annotations.
		    	</p>
				<Taxonomy />
    		</div>
    		<div className="col-7">
				<UncategorizedSource useCase={useCase} sourceName={useCaseSource} source={Sources[useCaseSource]}/>
    		</div>
    	</div>
  	</div>
  	);
}
