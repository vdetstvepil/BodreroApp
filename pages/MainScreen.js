import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Header from './components/Header.js'
import Footer from './components/Footer.js'

import HomeScreen from './tabs/HomeScreen.js'
import FavoriteScreen from './tabs/FavoriteScreen.js'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

class MainScreen extends Component {
  render() { 
    StatusBar.setBarStyle('dark-content', true);
   
    return (
      <SafeAreaView style={styles.SafeAreaView} forceInset={{ top: "always", bottom: "never" }}>
        <Header navigation={this.props.navigation}></Header>
        <NavigationContainer style={{height: '100%', margin: 0}}>
          <Tab.Navigator screenOptions={styles.TabNavigatorOptions} >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)}} />
          <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="heart" color={color} size={size} />)}} />
          <Tab.Screen name="Cart" component={Footer} options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cart" color={color} size={size} />)}} />
          <Tab.Screen name="Support" component={Footer} options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chat" color={color} size={size} />)}} />
          <Tab.Screen name="Profile" component={Footer} options={{
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />)}} />
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
  }
})

export default MainScreen;