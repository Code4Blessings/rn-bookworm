import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import colors from '../assets/colors';
import CustomActionButton from '../components/CustomActionButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.loginContainer}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput 
          style={styles.textInput}
          placeholder='abc@example.com'
          placeholderTextColor={colors.bgTextInputDark}
          keyboardType='email-address'
        />
        <TextInput style={styles.textInput}
          style={styles.textInput}
          placeholder='enter password'
          placeholderTextColor={colors.bgTextInputDark}
          secureTextEntry
        />
        <View style={styles.buttonContainer} >
          <CustomActionButton style={[styles.loginButtons, {borderColor: colors.bgPrimary}]}>
            <Text style={styles.loginButtonText}>Login</Text>
          </CustomActionButton>
          <CustomActionButton style={[styles.loginButtons, {borderColor: colors.bgError}]}>
             <Text style={styles.loginButtonText}>Sign Up</Text>
          </CustomActionButton>
        </View>
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: colors.bgMain,
    },
    textInput: {
      height: 50,
      borderWidth: 0.5,
      borderColor: colors.borderColor,
      marginHorizontal: 40, 
      marginBottom: 10,
      color: colors.txtWhite,
      paddingHorizontal: 10
    },
    loginButtons: {
      width: 200, 
      backgroundColor: 'transparent', 
      borderWidth: 0.5, 
      marginTop: 10
    },
    loginButtonText:{color: 'white', fontWeight: '100'},
    buttonContainer: {
      alignItems: 'center',
    }
});
