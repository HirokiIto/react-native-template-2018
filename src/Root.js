import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, observer } from 'mobx-react';
import stores from './stores';

import Routes from './Routes';

import Header from './containers/CustomHeader';

/*
 * Get rid of “Remote debugger is in a background tab” warning in React Native
 * https://stackoverflow.com/questions/41146446/get-rid-of-remote-debugger-is-in-a-background-tab-warning-in-react-native
 */
console.ignoredYellowBox = ['Remote debugger'];

// navigationとmobxを繋げる
@observer
class Root extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={styles.container}>
          <Header />
          {/* navigationとmobxを繋げる */}
          <Routes ref={(nav) => { stores.nav.setNavigator(nav); }} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Root;