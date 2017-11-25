import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, TouchableOpacity, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Card, CardSection, Button } from './common';

class EmployeeList extends Component {
  componentWillMount() { 
    this.props.employeesFetch();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}} >
        <TouchableOpacity onPress={() => Actions.EmployeeCreate()}>
        <Image style={{ width: 50, height: 50, marginLeft: 180, maginTop: 5}}
            source={require('../img/add.png')}
            />
        </TouchableOpacity >
        </View>
        <View style={{ flex: 8 }}>
      <FlatList 
        data={this.props.employees}
        renderItem ={({ item })=> <ListItem item={item}/>}
        keyExtractor={item => item.uid}
      />
      </View>	
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#e5ffff'
  },

  
};