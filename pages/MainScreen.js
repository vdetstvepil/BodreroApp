import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useState } from "react";

import Header from './Panels/Header.js'
import Footer from './Panels/Footer.js'


import HomeTab from './MainScreenTabs/HomeTab.js'
import CartTab from './MainScreenTabs/CartTab.js'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

class MainScreen extends Component {
  render() { 
    StatusBar.setBarStyle('dark-content', true);

    const cartGoods = [];
   
    return (
      <SafeAreaView style={styles.SafeAreaView} forceInset={{ top: "always", bottom: "never" }}>
        <Header navigation={this.props.navigation}></Header>
        <NavigationContainer style={{height: '100%', margin: 0}}>
        <Toast />
          <Tab.Navigator screenOptions={styles.TabNavigatorOptions} >
          <Tab.Screen name="Home" children={()=>{ return(<HomeTab navigation={this.props.navigation} cartGoods={cartGoods} />)}} options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)}} />
          <Tab.Screen name="Cart" children={()=>{ return(<CartTab navigation={this.props.navigation} cartGoods={cartGoods} />)}} options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cart" color={color} size={size} />)}} />
          </Tab.Navigator>
        </NavigationContainer>  
      </SafeAreaView>
    )
  }
}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },
  CommonView: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    padding: 20
  },
  TabNavigatorOptions: {
    tabBarItemStyle: {
      height: 60,
    },
    tabBarStyle: {
      height: 60,
      backgroundColor: '#FFFFFF',
    }, headerShown: false,  tabBarShowLabel: false, 
    tabBarActiveTintColor:'#282A2B',
    tabBarInactiveTintColor:'#D6D6D7',
    tabBarScrollEnabled: true,
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: (scene, jumpToIndex) => {
        console.log('onPress:', scene.route);
        jumpToIndex(scene.index);
      },
    }),
  }
})

export default MainScreen;