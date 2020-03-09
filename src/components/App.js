import React from 'react';
import {createStore} from 'redux';
import {appReducer} from 'app_reducers';

import { Scaffold, Header, Body, Footer } from '.';

const store = createStore(appReducer);

export default function App(props) {

	return(
		<Scaffold>
			<Header />
			<Body />
			<Footer />
		</Scaffold>
		);
}