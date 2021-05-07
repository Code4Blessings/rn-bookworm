import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import colors from '../../assets/colors';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.welcomeContainer}>
        <View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
            <Ionicons name='ios-bookmarks' size={150}color={colors.logoColor} />
        </View>
        <View style={{flex: 1, borderColor: 'orange', borderWidth: 1}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    welcomeContainer: {flex: 1}
});
