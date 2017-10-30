import React from 'react';
import {  Text, View } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button, Spinner } from './common';
import { 
    emailChanged,
    passwordChanged, 
    loginUser
 } from '../actions';

class LoginForm extends React.Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        console.log('click');
        const { email, password } = this.props;
        
        this.props.loginUser({ email, password });
      }
    renderButton(){
        if (this.props.loading){
            return <Spinner size="large"/>;
        }
        return (
            <Button onPress={() => this.onButtonPress()}>
            Login
            </Button>
        );
    }
    
    
render () {
    return(
        <Card >
            <CardSection style ={{paddingTop: 50}}>
                <Input 
                label ='Email' 
                placeholder ='Email'
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}/>
            </CardSection>

            <CardSection>
            <Input secureTextEntry
            label ='Password' placeholder ='Password'
            onChangeText ={this.onPasswordChange.bind(this)}
            value={this.props.password}/>
            </CardSection>

            <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
            <CardSection>
                
                {this.renderButton()}
            </CardSection>
           

        </Card>
    );
}
}
const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
  // email: state.auth.email
    return { email, password, error, loading };
  };
export default connect (mapStateToProps, { 
    emailChanged, passwordChanged, loginUser, 
})(LoginForm);

