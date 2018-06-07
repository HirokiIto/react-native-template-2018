// SignUp.js
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { auth, db } from '../../utils/firebase';

import * as Routes from '../../Routes';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

export default class SignUp extends Component {
  state = { ...INITIAL_STATE };

  handleSignUp = () => {
    const {
      email,
      passwordOne,
      passwordTwo,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => this.props.navigation.navigate(Routes.HOME))
      .catch(error => this.setState({ error }))
  }

  render() {
    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        { error &&
          <Text style={{ color: 'red' }}>
            {error.message}
          </Text> }
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={passwordOne => this.setState({ passwordOne })}
          value={passwordOne}
        />
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={passwordTwo => this.setState({ passwordTwo })}
          value={passwordTwo}
        />

        <Button disabled={isInvalid} title="Sign Up" onPress={this.handleSignUp} />
        <Text>{`Already have an account?`}</Text>
        <Button
          title="Sign In"
          onPress={() => this.props.navigation.navigate(Routes.SIGN_IN)}
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