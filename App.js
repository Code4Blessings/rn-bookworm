import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  FlatList
} from 'react-native';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomerDrawerComponent from './screens/DrawNavigator/CustomerDrawerComponent';
import colors from './assets/colors';


/* 
- AppSwitchNavigator
    -WelcomeScreen
      -SignUpScreen
    -HomeScreen
*/

const LoginStackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerBackTitleVisible: false,
    }
  }
}, {
  mode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.bgMain
    }
  }
});


const App = () => <AppContainer />;

const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: () => <Ionicons name="ios-home" size={24} />
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      drawerIcon: () => <Ionicons name='ios-settings' size={24} />
    }
  }
}, {
  contentComponent: CustomerDrawerComponent
})

const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  AppDrawerNavigator
  
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default App;