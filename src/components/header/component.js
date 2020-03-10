import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component(props) {

    return(
    	<div className={styles.header}>
    		<div className={"container-lg " + styles.logoContainer}>
    			<img src="/public/img/logo-text.png"/>
    			<span className="ml-3 text-light"><b>Categorizing Uncertainty</b> A survey on uncertainty use and categorization.</span>
    		</div>
    	</div>
    	);
}
