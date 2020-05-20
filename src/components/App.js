import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux'

import {appReducer} from 'app_reducers';

import { Scaffold, Header, Body, Footer } from 'app_components';

const store = createStore(appReducer);

export default function App(props) {

	return(
		<Provider store={store}>
			<Scaffold>
				<Header />
				<Body />
				<Footer />
			</Scaffold>
		</Provider>
		);
}