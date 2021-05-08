import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import colors from '../../assets/colors';
import CustomActionButton from '../../components/CustomActionButton';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.welcomeContainer}>
        <View style={styles.logoContainer}>
            <Ionicons name='ios-book' size={150}color={colors.logoColor} />
            <Text style={styles.appName}>BOOK WORM</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomActionButton 
            style={styles.loginButton}
            title='Login' 
            onPress={() => alert('Login')
          }>
            <Text style={styles.loginButtonText} >Log In</Text>
          </CustomActionButton>
          <CustomActionButton 
            style={styles.signUpButton}
            title='Signup' 
            onPress={() => alert('Sign Up')
          }>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </CustomActionButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    welcomeContainer: {flex: 1, backgroundColor: colors.bgMain},
    logoContainer: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    buttonContainer: {flex: 1, alignItems: 'center' },

    appName: {fontSize: 50, fontWeight: '100', color: 'white'},

    loginButton: {
      width: 200, 
      backgroundColor: 'transparent', 
      borderWidth: 0.5, 
      borderColor: colors.bgPrimary,
      marginBottom: 10
    },
    loginButtonText: {fontWeight: '100', color: 'white' },

    signUpButton : {
      width: 200, 
      backgroundColor: 'transparent', 
      borderWidth: 0.5, 
      borderColor: colors.bgError
    }
});
