import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component({source, categories}) {

	function onDragOver(e){
		e.stopPropagation();
		e.preventDefault();
	}

	function onDrop(e){
		console.log(e.target);
	}

	function textFragment([prev, uncertain, post], index){
		const category = categories.hasOwnProperty(index)?categories[index]:'';
		return(
			<span key={index}>
				<span>{prev}</span>
				<span className={styles.uncertain} 
					data-category={category}
					onDragOver={onDragOver}
					onDrop={onDrop}>{uncertain}</span>
				<span>{post}</span>
			</span>
		);
	}

	const fragments = source.map((x,i)=>textFragment(x,i));

    return(
	    <div className={`card ${styles.textSource}`}>
		  <div className="card-body">
		    {fragments}
		  </div>
		</div>
    	);
}
