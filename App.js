import React, { Component } from 'react';
import { AppRegistry, Image, View, Button, Alert, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import StartScreen from './pages/StartScreen.js'
import AuthScreen from './pages/AuthScreen.js'
import MainScreen from './pages/MainScreen.js'
import LocationScreen from './pages/LocationScreen.js'

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
  Main: {
    screen: MainScreen
  },
  Location: {
    screen: LocationScreen
  }
  
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