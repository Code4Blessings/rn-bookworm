import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {DrawerItems} from 'react-navigation-drawer';

import colors from '../../assets/colors';

export default class CustomerDrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container} />
        <View style={styles.iconContainer}>
          <Ionicons name='ios-book' size={100} color={colors.logoColor} />
          <Text style={styles.iconContainerText}>Book Worm</Text>
        </View>
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   container: {backgroundColor: colors.bgMain},
   iconContainer: {
     height: 150, 
     backgroundColor: colors.bgMain, 
     alignItems: 'center',
     justifyContent: 'center',
     paddingTop: Platform.OS == 'android' ? 20 : 0
  },
  iconContainerText: {fontSize: 24, color: 'white', fontWeight: '100'}
});
