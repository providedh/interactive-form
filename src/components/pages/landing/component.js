import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component(props) {

    return(
	    <div className="my-3 container-fluid">
	    	<div className="column mx-4">
	    		<div className={styles.header + " row"}>
	    			<img src="img/providedh-logo.svg"/>
	    			<p>
	    				The PROgressive VIsual DEcision-Making in Digital Humanities (PROVIDEDH) project is a three-year project funded within the CHIST-ERA call 2016. The project aims to give Digital Humanities (DH) scholars a space to explore and assess the completeness and evolution of digital research objects and the degree of uncertainty that the models applied to the data incorporate, among others.
	    			</p>
	    		</div>
	    	</div>
	    	<h3 className="mt-3 text-center">About this survey</h3>
	    	<ul className="mx-5">
	    		<li className="m-5">
			        <h4 className="d-inline">It is done in the context of</h4>
			        <p className="d-inline ml-2"><span>an study about perception of uncertainty in Digital-Humanities
			        related study objects, and how its understanding and visualization can aid in decision making
			        tasks that involve such uncertain sources.</span></p>
	    		</li>
	    		<li className="m-5">
			        <h4 className="d-inline">It aims at</h4>
			        <p className="d-inline ml-2"><span>gathering enough information regarding how heterogeneous groups of
			        people can understand and name uncertainty differently; therefore seeking to understand what is/are the
			        best taxonomies for it.</span></p>
	    		</li>
	    		<li className="m-5">
			        <h4 className="d-inline">Will require you to</h4>
			        <p className="d-inline ml-2"><span>create a taxonomy for categorizing the uncertainty found in different 
			        provided document sources, and later apply such taxonomy to the documents.</span></p>
	    		</li>
	    	</ul>
    	</div>
    	);
}
