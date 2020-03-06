import React from 'react';
import { useState, useEffect } from 'react';
import theme from '../../themes/theme.css';
import styles from './style.module.css';

export default function Component({children}) {

    return(
    	<div className={"container-fluid px-0 "+styles.scaffold}>
    			{children}
    	</div>
    	);
}
