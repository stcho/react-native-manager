import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesGet } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesGet();
	}

	renderItem({ item }) {
    return <EmployeeListItem employee={item} />;
  }

	render() {
		return (
			<FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.uid}
			/>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(mapStateToProps, { employeesGet })(EmployeeList);
