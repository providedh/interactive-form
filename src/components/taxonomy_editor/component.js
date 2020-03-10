import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component({
			categories, 
			newCategory, 
			boundAddCategory, 
			boundRemoveCategory, 
			boundUpdateCategory, 
			boundUpdateNewCategory, 
			boundSetDraggedCategory,
			freezed}) {
	const isFreezed = freezed==undefined?false:freezed,
		isEditable = freezed==undefined?true:!freezed;

	const category = (name, index)=>(
		<li key={index} draggable={isEditable} onDragStart={()=>boundSetDraggedCategory({name})}>
			<input className="form-control" type="text" disabled={isFreezed} value={name} onChange={e=>boundUpdateCategory({index, name:e.target.value})}/>
			{isFreezed===true?'':(
				<button type="button" className="close" aria-label="Close" onClick={()=>boundRemoveCategory({index})}>
				  <span aria-hidden="true">&times;</span>
				</button>
			)}
		</li>
		)

	const categoryInputs = categories.map((name, index)=>category(name, index));

    return(
	    <div className={styles.editor}>
	    	<p>
	    		Certainty categories allow differentiating between their sources, and 
	    		reason about how they may impact the underlaying original or truth value.
	    	</p>
	    	{isFreezed===true?'':(
		    	<div className="alert alert-secondary" role="alert">
				  	Edit, remove or add certainty categories using the input fields and 
				  	buttons bellow. Drag and drop each category in the uncertainty fields
				  	of the sample on the right.
				</div>
			)}
	    	<ul>
		    	{categoryInputs}
		    	{isFreezed===true?'':(
		    	<li>
					<div className="d-flex">
						<input className="form-control" type="text" value={newCategory} onChange={e=>boundUpdateNewCategory({name:e.target.value})}/>
						<button type="button" className="btn btn-light" aria-label="Close" onClick={()=>boundAddCategory({name: newCategory})}>
						  	Add
						</button>
					</div>
				</li>
				)}
			</ul>
	    </div>
    	);
}
