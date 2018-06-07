// Signin.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { Input } from 'react-native-elements';


import { auth } from '../../utils/firebase';

import * as Routes from '../../Routes';

import { PasswordForgetLink } from './PasswordForget';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

export default class Signin extends React.Component {
  state = { ...INITIAL_STATE };

  handleSignin = (event) => {
    // TODO: Firebase stuff...
    const {
      email,
      password,
    } = this.state;

    const {
      navigation,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        navigation.navigate(Routes.HOME);
      })
      .catch(error => this.setState({ error }));

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        { error &&
          <Text style={{ color: 'red' }}>
            {error.message}
          </Text> }
        
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={password}
        />
        <Button disabled={isInvalid} title="Sign In" onPress={this.handleSignin} />
        <Button
          title="Forget Password?"
          onPress={() => this.props.navigation.navigate(Routes.PASSWORD_FORGET)}
        />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate(Routes.SIGN_UP)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})