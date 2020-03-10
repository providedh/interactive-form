import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import {Title} from 'app_components';
import {LandingPage, UserPage, SendPage, UseCasePage, SamplePage} from 'app_components';
import {Navigation} from 'app_containers';


export default function Component(props) {

    return(
    	<div className={"container-xl "+styles.body}>
    		<Title />
    		<Navigation icons={['home-1', 'torso', 'circle', 'circle', 'circle', 'mail']}>
    			<LandingPage />
    			<UserPage />
                <SamplePage />
    			<UseCasePage 
                    title='First use case: German recipes'
                    description='An excerpt from a historical Greman food recipe.'
                    useCaseType='text' 
                    useCaseSource={'text_1'} />
    			<span> fourth page </span>
    			<SendPage />
    		</Navigation>
    	</div>
    	);
}
