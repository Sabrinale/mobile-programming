import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Card, CardSection, Input, Button, Spinner } from './common';
class EmployeeList extends React.Component {
  render (){
		
    return (
			<Card>
				<CardSection>
						<Button onPress={() => Actions.EmployeeCreate()}>
            Add
            </Button>
				</CardSection>
			</Card>
			
    );
  }
}

export default EmployeeList;
