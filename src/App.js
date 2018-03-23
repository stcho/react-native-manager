import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: "AIzaSyDSOZ3TnrD4i1hgW9Kd_P5vt0zDyhtXI5w",
	    authDomain: "react-native-manager-417df.firebaseapp.com",
	    databaseURL: "https://react-native-manager-417df.firebaseio.com",
	    projectId: "react-native-manager-417df",
	    storageBucket: "react-native-manager-417df.appspot.com",
	    messagingSenderId: "945734906973"
	  };

	  firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;