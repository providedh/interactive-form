import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component({children}) {

    return(
    	<div className={"container-fluid "+styles.scaffold}>
    		<div className="container-lg">
    			{children}
    		</div>
    	</div>
    	);
}
