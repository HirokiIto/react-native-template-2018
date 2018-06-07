import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'

/*
 * RoutesをwithAuthenticationに噛ませることでreloadしてもsession.userが保たれる
 */
// import withAuthentication from './containers/withAuthentication';

// import the different screens
import Signup from './components/AuthWithFirebase/Signup'
import Signin from './components/AuthWithFirebase/Signin'
import PasswordForget from './components/AuthWithFirebase/PasswordForget';
import Home from './containers/Home'

export const HOME = 'Home';
export const SIGN_UP = 'Signup';
export const SIGN_IN = 'Signin';
export const PASSWORD_FORGET = 'PasswordForget';

// create our app's navigation stack
const Routes = createSwitchNavigator(
  {
    Signup,
    Signin,
    PasswordForget,
    Home
  },
  {
    initialRouteName: 'Home'
  }
)

export default Routes;
