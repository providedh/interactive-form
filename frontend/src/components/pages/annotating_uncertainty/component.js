import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Sources from 'app_sources';
import UnannotatedSource from 'app_containers/unannotated_source'

export default function Component({title, description, useCase, useCaseType, useCaseSource}) {
	
    return(
	    <div className="my-3 container-fluid">
	    	<h3 className="mt-3">{title}</h3>
	    	<p>{description}</p>
	    	<div className={`row ${styles.container}`}>
	    		<div className="col-5 bg-blue">
					Any piece of information is subjected to have underlying uncertainty.
					After reading through the following excerpt, select the fragments that 
					bring you doubts; either in the ortography, the meaning or coherence with
					the rest of the text.
					<div className="alert alert-secondary mt-2" role="alert">
						Select the text to create uncertainty annotations. Click on annotated text
						to remove the annotations.
					</div>
	    		</div>
	    		<div className="col-7">
					<UnannotatedSource useCase={useCase} sourceName={useCaseSource} source={Sources[useCaseSource]}/>
	    		</div>
	    	</div>
    	</div>
    	);
}
