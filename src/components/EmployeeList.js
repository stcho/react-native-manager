import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesGet } from '../actions';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesGet();
	}

	render() {
		return (
			<View>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
			</View>
		);
	}
}

export default connect(null, { employeesGet })(EmployeeList);
