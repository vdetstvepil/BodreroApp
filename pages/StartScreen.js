import React, { Component } from 'react';
import { Image, View, Button, Alert, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar } from 'react-native';


class StartScreen extends Component {
  render() { 
    StatusBar.setBarStyle('light-content', true);
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.CommonView}>
          <View style={{ flex: 1 }}/>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./images/bodrero-logo.png')} style={{width: 300, resizeMode: 'contain'}}/>
          </View>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', margin: 5}}>
            <Text style={styles.Title}>Вкус французской классики</Text>
            <Text style={styles.SubTitle}>Сеть кондитерских Франсуа Бодреро в самом центре Москвы</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.ButtonGo} onPress={() => this.props.navigation.navigate('Auth')}>
            <Image source={require('../assets/icons/arrow-right.png')} />
          </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}/>
        </View>
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
    backgroundColor: '#212325',
    flex: 1
  },
  CommonView: {
    backgroundColor: '#212325',
    flex: 1,
    padding: 20
  },
  Title: {
    color: "#F2D7BC",
    textAlign: 'center',
    fontFamily: "Jost-Medium",
    fontSize: 32,
    lineHeight: 40,
  },
  SubTitle: {
    color: "#9199A1",
    textAlign: 'center',
    fontFamily: "Jost-Regular",
    fontSize: 16,
  },
  ButtonGo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    backgroundColor: '#F2D7BC',
    borderRadius: 20,
  }
})

export default StartScreen;