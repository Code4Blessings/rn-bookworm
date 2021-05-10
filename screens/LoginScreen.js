import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.signUpContainer}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
