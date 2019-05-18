import React, { Components } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SingUpForm extends Components { 
  /*   constructor (props) {
        super(props);
        this.state = { phone : ''}
    } */

    // state decleat outside the constactor equvelant to inside the constactor.

    state = { phone : ''};

    render() {
        return (
            <View>
                <FormLabel>Enter Phone Number</FormLabel>
                <FormInput />
                <Button title="Submit" />
            </View>
        )
    }
}

export default SingUpForm;