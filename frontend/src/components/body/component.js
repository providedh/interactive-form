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
    const icons = [
        'home-1',
        'torso',
        'circle',
        'circle', 'circle', 'circle',
        'circle', 'circle', 'circle',
        'circle', 'circle', 'circle',
        'circle', 'circle', 'circle',
        'circle', 'circle', 'circle',
        'circle', 'circle', 'circle',
        'circle', 'circle', 'circle',
        'mail']

    const useCases = [
        'dep_809015r004',
        'dep_812227v188',
        'dep_816090r036',
        'dep_835136r184',
        'dep_812144r141',
        'dep_815046v103',
        'dep_833107r083',
    ].map((name, index) => [
		<AnnotatingUncertaintyPage
            key={index + 'a'}
			useCase={''+index}
            title={name}
            description='An excerpt from a historical text.'
            useCaseType='raw'
            useCaseSource={name} />,
		<CategorizingUncertaintyPage
            key={index + 'c'}
			useCase={''+index}
            title={name}
            description='An excerpt from a historical text.'
            useCaseType='raw'
            useCaseSource={name} />,
        <RemapUncertaintyPage
            key={index + 'r'}
			useCase={''+index}
            title={name}
            description='An excerpt from a historical text.'
            useCaseType='raw'
            useCaseSource={name} />
    ])

    return(
    	<div className={"container-xl "+styles.body}>
    		<Title />
    		<Navigation icons={icons}>
            {[
    			<LandingPage key={'l'}/>,
    			<UserPage  key={'u'}/>,
                <SamplePage  key={'s'}/>,
                ...useCases.reduce((ac, dc) => [...ac, ...dc], []),
			     <SendPage  key={'s'}/>
            ]}
    		</Navigation>
    	</div>
    	);
}
