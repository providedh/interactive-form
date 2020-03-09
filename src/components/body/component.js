import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import {Title} from 'app_components';
import {LandingPage, UserPage, SendPage, UseCasePage} from 'app_components';
import {Navigation} from 'app_containers';


export default function Component(props) {

    return(
    	<div className={"container-lg "+styles.body}>
    		<Title />
    		<Navigation icons={['home-1', 'torso', 'circle', 'circle', 'mail']}>
    			<LandingPage />
    			<UserPage />
    			<UseCasePage useCaseType={'text'} useCaseSource={'first'} />
    			<span> fourth page </span>
    			<SendPage />
    		</Navigation>
    	</div>
    	);
}
