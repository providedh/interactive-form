import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Sources from 'app_sources';
import UnremappedSource from 'app_containers/unremapped_source';
import Taxonomy from 'app_containers/taxonomy';

export default function Component({title, description, useCase, useCaseType, useCaseSource}) {
	const types = ['Imprecision', 'Ignorance', 'Credibility', 'Incompleteness']

  return(
    <div className="my-3 container-fluid">
    	<h3 className="mt-3">{title}</h3>
    	<p>{description}</p>
    	<div className={`row ${styles.container}`}>
    		<div className="col-5 bg-blue">
    			<p>
    				Categorizing uncertainty is a difficult task that also involves describing the taxonomy.
    				Here we provide a curated taxonomy that we designed, use it to categorize your annotations;
    				your categories are shown in lightgrey.
    			</p>
					<Taxonomy freezedCategories={types} freezed={false} editable={false}/>
    		</div>
    		<div className="col-7">
					<UnremappedSource useCase={useCase} sourceName={useCaseSource} source={Sources[useCaseSource]}/>
    		</div>
    	</div>
  	</div>
 	);
}
