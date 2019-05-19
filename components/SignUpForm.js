import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


const ROOT_URL = 'https://us-central1-one-time-password-f996d.cloudfunctions.net';

class SingUpForm extends Component { 
  /*   constructor (props) {
        super(props);
        this.state = { phone : ''}
    } */

    // state decleat outside the constactor equvelant to inside the constactor.

    state = { phone : ''};
    // refactore in async await
    handleSubmit = async() =>{
       try {
         await axios.post(`${ROOT_URL}/createUser`, { phone : this.state.phone }); // after createing a new user we what to request the new password to be generated and send
         await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone : this.state.phone });
           } catch (err) {
            // setState({ error: 'Somthing went worng'}) to be used in the runder methde to show err to the user
            console.log(err);
        }
     }

    handleSubmit_OLD = () =>{
        axios.post(`${ROOT_URL}/createUser` , {
            phone : this.state.phone
        }) // after createing a new user we what to request the new password to be generated and send
        .then(() => {
            axios.post(`${ROOT_URL}/requestOneTimePassword` ,{ phone : this.state.phone } )
        })
        .catch((err) => console.log(err))
    } 

    /*   handleSubmit(){
        // this is correct inside the call back function which is "here" 
        // When we call by using .bind(this) but With ES 2017 we will use arrow function that dose't need to use .bind(this)
    } */
    render() {
        return (
            <View>
                <Text>Hi Omar</Text>
                <Avatar
                        rounded
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        />
                 <Input
                 style = {{ marginBottom: 10 }}
                    label="Sign Up with Phone Number"
                    placeholder='phone #'
                    dataDetectorTypes='phoneNumber'
                    value = {this.state.phone}
                    onChangeText={(phone) => this.setState({phone})} // same as phone: phone non in ES15
                    maxLength = {10}
                    leftIcon={
                     <Icon  name='user'
                            size={24}
                            color='black' /> } 
                />
                <Button onPress={this.handleSubmit} title="Submit"/* no need to use {this.handleSubmit.bind(this)}  the arrow function take care of the bind*/ 
                /> 
            </View>
        )
    }
}

export default SingUpForm;
