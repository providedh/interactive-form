import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component(props) {

    return(
	    <div className="my-3 container">
	    	<div className="column">
	    		<div className={styles.header + " row"}>
	    			<img src="/public/img/providedh-logo.svg"/>
	    			<p>
	    				The PROgressive VIsual DEcision-Making in Digital Humanities (PROVIDEDH) project is a three-year project funded within the CHIST-ERA call 2016. The project aims to give Digital Humanities (DH) scholars a space to explore and assess the completeness and evolution of digital research objects and the degree of uncertainty that the models applied to the data incorporate, among others.
	    			</p>
	    		</div>
	    	</div>
	    	<h3 className="mt-3 text-center">About this survey</h3>
	    	<ul className="mx-5">
	    		<li className="m-5">
			        <h4 className="d-inline">It originates in the context of</h4>
			        <p className="d-inline ml-2"><span>an study about historical-text related uncertainty and how it can be perceived and categorized.</span></p>
	    		</li>
	    		<li className="m-5">
			        <h4 className="d-inline">it aims at</h4>
			        <p className="d-inline ml-2"><span>understanding how uncertainty (for the same piece of information) is defined by different users.</span></p>
	    		</li>
	    		<li className="m-5">
			        <h4 className="d-inline">Will require</h4>
			        <p className="d-inline ml-2"><span>Creating a taxonomy for uncertainty and using it to describe the type of uncertainty you
			        	encounter in a set of use cases.</span></p>
	    		</li>
	    	</ul>
    	</div>
    	);
}
