import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

import Title from 'app_components/title';
import LandingPage from 'app_components/pages/landing'
import UserPage from 'app_components/pages/user'
import AnnotatingUncertaintyPage from 'app_components/pages/annotating_uncertainty'
import CategorizingUncertaintyPage  from 'app_components/pages/categorizing_uncertainty'
import SendPage from 'app_components/pages/send'
import UseCasePage from 'app_components//pages/use_case'
import SamplePage from 'app_components/pages/sample'
import Navigation from 'app_containers/navigation';
import RemapUncertaintyPage from 'app_components/pages/remap_uncertainty'


export default function Component(props) {

    return(
    	<div className={"container-xl "+styles.body}>
    		<Title />
    		<Navigation icons={['home-1', 'torso', 'circle', 'circle', 'circle', 'circle', 'circle', 'circle', 'circle', 'circle', 'circle', 'circle', 'mail']}>
    			<LandingPage />
    			<UserPage />
                <SamplePage />
    			<AnnotatingUncertaintyPage
					useCase='1'
                    title='First use case: German recipes'
                    description='An excerpt from a historical Greman food recipe.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
				<CategorizingUncertaintyPage
					useCase='1'
                    title='First use case: German recipes'
                    description='An excerpt from a historical Greman food recipe.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
                <RemapUncertaintyPage
					useCase='1'
                    title='First use case: German recipes'
                    description='An excerpt from a historical Greman food recipe.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
                <AnnotatingUncertaintyPage
					useCase='2'
                    title='Second use case: A war registry'
                    description='A registry from the Second World War.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
				<CategorizingUncertaintyPage
					useCase='2'
                    title='Second use case: A war registry'
                    description='A registry from the Second World War.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
                <RemapUncertaintyPage
					useCase='2'
                    title='Second use case: A war registry'
                    description='A registry from the Second World War.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
                <AnnotatingUncertaintyPage
					useCase='3'
                    title='Third use case: Newspaper'
                    description='An article from a modern newspaper.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
				<CategorizingUncertaintyPage
					useCase='3'
                    title='Third use case: Newspaper'
                    description='An article from a modern newspaper.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
                <RemapUncertaintyPage
					useCase='3'
                    title='Third use case: Newspaper'
                    description='An article from a modern newspaper.'
                    useCaseType='raw'
                    useCaseSource={'raw_1'} />
    			<SendPage />
    		</Navigation>
    	</div>
    	);
}
