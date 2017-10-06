import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
        apiKey: 'AIzaSyDUM-zhi8Epf2KI7FSMuEnym_871n0ng-U',
        authDomain: 'auth-f26d7.firebaseapp.com',
        databaseURL: 'https://auth-f26d7.firebaseio.com',
        projectId: 'auth-f26d7',
        storageBucket: 'auth-f26d7.appspot.com',
        messagingSenderId: '608313609688'
      });
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
      });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                ); 
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.buttonStyle}>
                        <Spinner size='large' />
                    </View>
                ); 
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    buttonStyle: {
        paddingTop: 30
    }
};

export default App;

