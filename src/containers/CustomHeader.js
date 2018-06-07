// Header.js
import React, { Component } from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { inject, observer } from 'mobx-react';
import { Header, Icon } from 'react-native-elements';

/*
 * withAuthenticationに噛ませることでreloadしてもsession.userが保たれる
 * navigationとmobxの関係でRootを噛ませられないからHeader
 */
import withAuthentication from './withAuthentication';

import * as Routes from '../Routes';

import SignOutButton from '../components/AuthWithFirebase/Signout';

@inject('session')
@inject('nav')
@observer
class CustomHeader extends Component {
  render() {
    const { session, nav } = this.props;
    const rightComponent = session.user ?
      <SignOutButton navigation={nav.navigation} /> :
      <Icon
        name='home'
        type='entypo'
        color='#fff'
        onPress={() => nav.navigation.navigate(Routes.HOME)}
      />

    return (
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={rightComponent}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default withAuthentication(CustomHeader);