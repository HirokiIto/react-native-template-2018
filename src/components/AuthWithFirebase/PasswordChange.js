import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { auth } from '../../utils/firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChange extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onPress = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <View style={styles.container}>
        <TextInput
          secureTextEntry
          placeholder="New Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={passwordOne => this.setState({ passwordOne })}
          value={passwordOne}
        />
        <TextInput
          secureTextEntry
          placeholder="Confirm New Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={passwordTwo => this.setState({ passwordTwo })}
          value={passwordTwo}
        />
        <Button disabled={isInvalid} title="Reset Password" onPress={this.onPress} />

        { error && <Text>{error.message}</Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  }
})

export default PasswordChange;