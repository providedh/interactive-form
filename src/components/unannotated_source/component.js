import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import {processSelection, getSelection} from './text_selection.js';

function handleSelection (container, selectionEvent, useCase, boundAddAnnotation) {
	const [domSelection, text] = processSelection(selectionEvent)
  
	if (domSelection == null) { return }
	event.stopPropagation()

	const [start, stop] = getSelection(container, domSelection)
	const wordIndex = (container.innerText
		.slice(0, start)
		.split(' ')
		.length - 1)
	const wordCount = text.split(' ').length
	boundAddAnnotation({useCase, words: [wordIndex, wordIndex + wordCount]})
  }

function getFragments(source, useCase, annotations, boundRemoveAnnotation){
	if (annotations === undefined  || Object.keys(annotations).length === 0){ return source }

	const words = source.replace(/ +/g, ' ').split(' ')
	const fragments = []

	const sorted = Object
		.values(annotations)
		.sort((a, b) => a.words[0] - b.words[0])
	
	sorted.forEach((annotation, i) => {
		if(i > 0) {
			fragments.push(words.slice(sorted[i-1].words[1], annotation.words[0]).join(' '))
		} else {
			fragments.push(words.slice(0, annotation.words[0]).join(' '))
		}
		fragments.push(' ')
		fragments.push(<span key={annotation.words.join('_')} 
							 className={styles.uncertain}
							 onClick={()=>boundRemoveAnnotation({useCase, words:annotation.words})}> 
			{words.slice(annotation.words[0], annotation.words[1]).join(' ')} 
		</span>)
		fragments.push(' ')
	})
	fragments.push(words.slice(sorted[sorted.length - 1].words[1]).join(' '))

	return fragments
}

export default function Component({sourceName, source, annotations, boundAddAnnotation, useCase, boundRemoveAnnotation}) {
	const ref = useRef()

	useEffect(() => {
		ref.current.addEventListener ('mouseup', e => handleSelection(ref.current, e, useCase, boundAddAnnotation))
	  }, [])

	const fragments = getFragments(source, useCase, annotations?.[useCase], boundRemoveAnnotation)

    return(
	    <div className={`card ${styles.textSource}`}>
		  <div className="card-body" ref={ref}>
			  {fragments}
		  </div>
		</div>
    	);
}
