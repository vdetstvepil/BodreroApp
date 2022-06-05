import React, { Component } from 'react';
import { AppRegistry, Image, View, Button, Alert, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import StartScreen from './components/StartScreen.js'
import AuthScreen from './components/AuthScreen.js'

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Start: {
    screen: StartScreen
  },
  Auth: {
    screen: AuthScreen
  },
  
},
  {
    initialRouteName: "Start",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
}); 

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});