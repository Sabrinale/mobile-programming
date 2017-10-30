import React from 'react';
import { Text, View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}</View>
    );
};

const styles = {
    containerStyle: {
        paddingTop: 50,
        borderWidth: 1,
        borderRadius: 1, 
        borderColor: '#ddd',
        borderBottomWidth: 0,
    
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2, 
        elevation: 1, 
        marginLeft: 5, 
        marginRight: 5, 
        marginTop: 5
    }
};

export { Card } ;
