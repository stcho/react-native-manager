import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDSOZ3TnrD4i1hgW9Kd_P5vt0zDyhtXI5w',
			authDomain: 'react-native-manager-417df.firebaseapp.com',
			databaseURL: 'https://react-native-manager-417df.firebaseio.com',
			projectId: 'react-native-manager-417df',
			storageBucket: 'react-native-manager-417df.appspot.com',
			messagingSenderId: '945734906973'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
