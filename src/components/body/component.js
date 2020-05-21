import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Title from 'app_components/title';
import LandingPage from 'app_components/pages/landing'
import UserPage from 'app_components/pages/user'
import AnnotatingUncertaintyPage from 'app_components/pages/annotating_uncertainty'
import SendPage from 'app_components/pages/send'
import UseCasePage from 'app_components//pages/use_case'
import SamplePage from 'app_components/pages/sample'
import Navigation from 'app_containers/navigation';


export default function Component(props) {

    return(
    	<div className={"container-xl "+styles.body}>
    		<Title />
    		<Navigation icons={['home-1', 'torso', 'circle', 'circle', 'circle', 'mail']}>
				<AnnotatingUncertaintyPage
					useCase='1'
                    title='First use case: German recipes'
                    description='An excerpt from a historical Greman food recipe.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
    			<LandingPage />
    			<UserPage />
                <SamplePage />
    			<UseCasePage 
                    title='First use case: German recipes'
                    description='An excerpt from a historical Greman food recipe.'
                    useCaseType='text' 
                    useCaseSource={'text_1'} />
    			<SendPage />
    		</Navigation>
    	</div>
    	);
}
