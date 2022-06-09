import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';

import HeaderWithReturn from './Panels/HeaderWithReturn.js'
import Map from './LocationScreenComponents/Map.js'
import MapAddressItems from './LocationScreenComponents/MapAddressItems.js';


class LocationScreen extends Component {
  render() { 
    StatusBar.setBarStyle('dark-content', true);
    
    return (
      <SafeAreaView style={styles.SafeAreaView}>
          <HeaderWithReturn navigation={this.props.navigation}></HeaderWithReturn>
          <View style={styles.CommonView}>
          <Map/>
           <MapAddressItems/>
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    SafeAreaView: {
        backgroundColor: '#F7F7F7',
        flex: 1
      },
      CommonView: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 20
      },
      Map: {
        height: 250,
        borderRadius: 20,
      },
      Title: {
        color: '#323436',
        textAlign: 'left',
        fontFamily: 'Jost-Semibold',
        fontSize: 28,
        lineHeight: 40,
        marginTop: 15
      },
      SubTitle: {
        color: '#9199A1',
        textAlign: 'center',
        fontFamily: 'Jost-Regular',
        fontSize: 16,
      },
 
})

export default LocationScreen;