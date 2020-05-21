import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

export default function Component({sourceName, source, annotations, draggedCategory, boundAddUserCategory, useCase, boundRemoveUserCategory}) {
	const ref = useRef()

	function onDragOver(e){
		e.stopPropagation();
		e.preventDefault();
	}
	
	function onDrop(words){
		boundAddUserCategory({useCase, words, category: draggedCategory})
	}

	function getFragments(){
		const annotations_ = annotations?.[useCase]
		if (annotations_ === undefined  || Object.keys(annotations_).length === 0){ return source }
	
		const words = source.replace(/ +/g, ' ').split(' ')
		const fragments = []
	
		const sorted = Object
			.values(annotations_)
			.sort((a, b) => a.words[0] - b.words[0])
		
		sorted.forEach((annotation, i) => {
			if(i > 0) {
				fragments.push(words.slice(sorted[i-1].words[1], annotation.words[0]).join(' '))
			} else {
				fragments.push(words.slice(0, annotation.words[0]).join(' '))
			}
			fragments.push(' ')
			const category = annotation.userCategories.join(', ')
			fragments.push(<span key={annotation.words.join('_')} 
								 className={styles.uncertain}
								 data-category={category}
								 onDragOver={onDragOver}
								 onDrop={()=>onDrop(annotation.words)}
								 onClick={()=>boundRemoveUserCategory({
									 useCase, 
									 words:annotation.words, 
									 category: annotation.userCategories[annotation.userCategories.length - 1]})}> 
				{words.slice(annotation.words[0], annotation.words[1]).join(' ')} 
			</span>)
			fragments.push(' ')
		})
		fragments.push(words.slice(sorted[sorted.length - 1].words[1]).join(' '))
	
		return fragments
	}

	const fragments = getFragments()

    return(
	    <div className={`card ${styles.textSource}`}>
		  <div className="card-body" ref={ref}>
			  {fragments}
		  </div>
		</div>
    	);
}
