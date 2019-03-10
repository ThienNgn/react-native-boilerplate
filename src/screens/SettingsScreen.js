// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../styles';

type Props = {};

class SettingsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings screen</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.aliceBlue,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: COLORS.black,
    marginBottom: 5,
  },
});

export default SettingsScreen;
