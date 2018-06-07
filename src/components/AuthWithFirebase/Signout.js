import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

import { auth } from '../../utils/firebase';

import * as Routes from '../../Routes';

export default class SignOutButton extends Component {
  constructor(props) {
    super(props);
  }

  onPress = (e) => {
    const {
      navigation, // react-navigation instance
    } = this.props;

    auth.doSignOut()
    navigation.navigate(Routes.SIGN_IN);
  }

  render() {
    return (
      <Icon
        name='sign-out'
        type='font-awesome'
        color='#fff'
        onPress={this.onPress}
      />
    )
  }
}