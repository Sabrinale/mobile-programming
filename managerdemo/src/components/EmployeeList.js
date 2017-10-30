import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { employeesFetch } from '../actions';
import {Card, CardSection, Input, Button, Spinner } from './common';

class EmployeeList extends React.Component {
	// as soon as this com about to show ,get all employee
	componentWillMount(){
		this.props.employeesFetch();
		
		this.createDataSource(this.props);
		
	}
	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps)
	}
	createDataSource({employees}){
		const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
	
	}
	renderRow(employee) {
    return <ListItem employee={employee} />;
  }
  render (){
		console.log(this.props);
    return (
			
			<Card>
				<ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
				<CardSection>
						<Button onPress={() => Actions.EmployeeCreate()}>
            Add
            </Button>
				</CardSection>
			</Card>
			
    );
  }
}
const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };// array employee with every objects in thie array
};

export default connect (mapStateToProps, { employeesFetch })(EmployeeList);
