import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component({current, allowNavigation, info, boundAdvancePage, boundBackPage, icons}) {

	const navIcon = (icon, current, key)=><li key={key} 
										className={styles.icon+" px-3 list-group-item "+(current===true?styles.current:'')}>
										<i className={'icon-'+icon}></i>
										</li>

	const navButton = (text, action, active)=><button 
												disabled={!active}
												className="btn btn-light btn-link" 
												onClick={()=>action()}>{text}</button>;

	const pages = icons.map((icon,i)=>navIcon(icon, i==current, i));

    return(
    	<div className="d-flex justify-content-center m-3">
	    	<ul className="list-group list-group-flush list-group-horizontal">
	    		{navButton('Back', boundBackPage, current > 0)}
	    		{pages}
	    		{navButton('Continue', boundAdvancePage, (current + 1)<icons.length)}
			</ul>
		</div>
    	);
}
