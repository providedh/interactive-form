import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component({categories, newCategory, boundAddCategory, boundRemoveCategory, boundUpdateCategory, boundUpdateNewCategory}) {
	const category = (name, index)=>(
		<li key={index}>
			<span></span>
			<input className="form-control" type="text" value={name} onChange={e=>boundUpdateCategory({index, name:e.target.value})}/>
			<button type="button" className="close" aria-label="Close" onClick={()=>boundRemoveCategory({index})}>
			  <span aria-hidden="true">&times;</span>
			</button>
		</li>
		)

	const categoryInputs = categories.map((name, index)=>category(name, index));

    return(
	    <div className={styles.editor}>
	    	<ul>{categoryInputs}</ul>
	    	<li>
				<span></span>
				<input className="form-control" type="text" value={newCategory} onChange={e=>boundUpdateNewCategory({name:e.target.value})}/>
				<button type="button" className="close" aria-label="Close" onClick={()=>boundAddCategory({name: newCategory})}>
				  	Add
				</button>
			</li>
	    </div>
    	);
}
