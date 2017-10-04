import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
        apiKey: 'AIzaSyDUM-zhi8Epf2KI7FSMuEnym_871n0ng-U',
        authDomain: 'auth-f26d7.firebaseapp.com',
        databaseURL: 'https://auth-f26d7.firebaseio.com',
        projectId: 'auth-f26d7',
        storageBucket: 'auth-f26d7.appspot.com',
        messagingSenderId: '608313609688'
      });    
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;

