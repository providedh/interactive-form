import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux'

import {appReducer} from 'app_reducers';

import Scaffold from 'app_components/scaffold';
import Header from 'app_components/header';
import Body from 'app_components/body';
import Footer from 'app_components/footer';

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