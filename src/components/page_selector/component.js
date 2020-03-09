import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component({current, allowNavigation, info, boundAdvancePage, boundBackPage, length}) {

	const pages = [];
	for(let i=0; i<length; i++){
		pages.push(<li key={i} className={"px-3 list-group-item "+(current==i?styles.current:'')}>page {i}</li>)
	}

	const navButton = (text, action, active)=><button 
												disabled={!active}
												className="btn btn-light btn-link" 
												onClick={()=>action()}>{text}</button>;

    return(
    	<div className="d-flex justify-content-center m-3">
	    	<ul className="list-group list-group-flush list-group-horizontal">
	    		{navButton('back', boundBackPage, current > 0)}
	    		{pages}
	    		{navButton('Continue', boundAdvancePage, (current + 1)<length)}
			</ul>
		</div>
    	);
}
