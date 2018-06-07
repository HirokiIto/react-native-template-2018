// Home.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { inject, observer } from 'mobx-react';

import withAuthorization from './withAuthorization';

import PasswordChange from '../components/AuthWithFirebase/PasswordChange';

@inject('session')
@inject('nav')
@observer
class Home extends React.Component {
  render() {
    const { session, nav } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hi {session.user.email}!
        </Text>
        <PasswordChange />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    margin: 10,
  }
})

export default withAuthorization(Home);