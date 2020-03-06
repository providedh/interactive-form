import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import {Title, PageManager} from '..';

export default function Component(props) {

    return(
    	<div className={"container-lg "+styles.body}>
    		<Title />
    		<PageManager />
    	</div>
    	);
}
