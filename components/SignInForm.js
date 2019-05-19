import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


const ROOT_URL = 'https://us-central1-one-time-password-f996d.cloudfunctions.net';

class SingInForm extends Component { 
    state = { phone: '', code: ''};
 
    handleSubmit = async () => {
        try {
        // const { phone, code } = this.state; // for destructring to replace the next line call
       let response = axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
            phone: this.state.phone, code: this.state.code
            })
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <View>
                <Text>Hi Abdul Rahman</Text>
               
                 <Input style = {{ marginBottom: 10 }}
                    label="Enter Phone Number"
                    placeholder='phone #'
                    value = {this.state.phone}
                    onChangeText={(phone) => this.setState({phone})} 
                    leftIcon={ <Icon  name='address-book' size={24} /> } 
                />

                 <Input  style = {{ marginBottom: 10 }}
                    label="Enter Code"
                    placeholder='Code #'
                    value = {this.state.code}
                    onChangeText={(Code) => this.setState({Code})} 
                    leftIcon={ <Icon  name='comments' size={24}  /> } 
                />
                <Button onPress={this.handleSubmit} title="Submit"
                /> 
            </View>
        )
    }
}

export default SingInForm;
