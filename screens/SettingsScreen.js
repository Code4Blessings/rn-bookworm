import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import colors from '../assets/colors';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.settingsContainer}>
         <CustomActionButton 
            style={styles.logoutButton}
            title='Login' 
            onPress={() => this.props.navigation.navigate('WelcomeScreen')
          }>
            <Text style={styles.loginButtonText} >Logout</Text>
          </CustomActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    settingsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutButton: {
      width: 200, 
      backgroundColor: colors.bgMain, 
      borderWidth: 0.5, 
      borderColor: colors.bgPrimary,
      marginBottom: 10
    },
    loginButtonText: {fontWeight: '100', color: 'white' },

});
