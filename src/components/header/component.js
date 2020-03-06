import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component(props) {

    return(
    	<div className={styles.header}>
    		<div className={"container-lg " + styles.logoContainer}>
    			<img src="/public/img/logo-text.png"/>
    		</div>
    	</div>
    	);
}
