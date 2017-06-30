/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';
import Home from './Components/Home'

export default class Lukeat extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Home />
      </View>

    );
  }
}

AppRegistry.registerComponent('Lukeat', () => Lukeat);
