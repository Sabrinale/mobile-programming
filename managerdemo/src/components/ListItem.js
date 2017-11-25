import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ item: this.props.item });
  }

  render() {
    const { name } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View >
          <CardSection style={{ flex: 1, margin: 5, padding: 20, borderRadius: 15, 
          justifyContent: 'space-around',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          }}>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
            <View style={{ flex: 1}}></View>
            <View style={{flex:1}}>
            <Image style={{  width: 30, marginLeft: 25, height: 30, }}
            source={require('../img/arrow.png')}
            />
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15, 
    flex: 3
  }
};

export default ListItem;
