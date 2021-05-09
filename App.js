import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  FlatList
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';

/* 
- AppSwitchNavigator
    -WelcomeScreen
      -SignUpScreen
    -HomeScreen
*/

const LoginStackNavigator = createStackNavigator({
  WelcomeScreen,
  SignUpScreen
})


const App = () => <AppContainer />;

const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  HomeScreen,
  
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default App;