import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component(props) {
	console.log(props)

    return(
	    <div className={`card ${styles.textSource}`}>
		  <div className="card-body">
		  </div>
		</div>
    	);
}
