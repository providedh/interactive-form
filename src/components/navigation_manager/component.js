import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

import {PageSelector} from 'app_components';

function useScrolling(index, pages){
	useEffect(()=>{
		if(pages != undefined)
			pages.style.setProperty('right', `calc(${index}*(100% + 50px))`)
	}, [index]);
}

export default function Component({
		current,
		allowNavigation,
		info,
		boundAdvancePage,
		boundBackPage,
		boundAllowNavigation,
		boundDisallowNavigation,
		icons,
		children,
	}) {

	const pagesRef = useRef();
	const pages = children.map((c,i)=><div key={i} id={'page-'+i} className={styles.page}>{c}</div>);

	useScrolling(current, pagesRef.current);

    return <div className="column">
    	<div className={styles.pageView}>
	    	<div className={styles.pages} ref={pagesRef}>
	    		{pages}
	    	</div>
    	</div>
    	<PageSelector {...{current, allowNavigation, info, boundAdvancePage, boundBackPage, icons}}/>
    </div>;
}
