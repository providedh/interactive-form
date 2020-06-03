import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Sources from 'app_sources';
import Taxonomy from 'app_containers/taxonomy'
import TextSource from 'app_containers/text_source';

export default function Component({title, description, useCaseType, useCaseSource}) {
	

    return(
	    <div className="my-3 container-fluid">
	    	<h3 className="mt-3">{title}</h3>
	    	<p>{description}</p>
	    	<div className={`row ${styles.container}`}>
	    		<div className="col-5 bg-blue">
	    			<Taxonomy />
	    		</div>
	    		<div className="col-7">
	    			<TextSource sourceName={useCaseSource} source={Sources[useCaseSource]}/>
	    		</div>
	    	</div>
    	</div>
    	);
}
