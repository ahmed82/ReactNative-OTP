import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase'

export default class App extends React.Component {
    componentDidMount() {
      const firebaseConfig = {
        apiKey: "AIzaSyB3F-QBw0kbYU6W5KpzXZas6g5aHuiOo2o",
        authDomain: "one-time-password-f996d.firebaseapp.com",
        databaseURL: "https://one-time-password-f996d.firebaseio.com",
        projectId: "one-time-password-f996d",
        storageBucket: "one-time-password-f996d.appspot.com",
        messagingSenderId: "758774069472",
        appId: "1:758774069472:web:d131ecc3de7d132e"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
