import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class HeaderWithReturn extends Component {
  render() { 
    return (
      <View style={styles.NavBarView}>
        <TouchableOpacity style={styles.ButtonLocation} onPress={() => this.props.navigation.navigate('Location')}>
          <Image source={require('../../assets/icons/location-pin.png')} style={{width:24, height:24, }} />
        </TouchableOpacity>
        <Image source={require('../../images/bodrero-logo-dark.png')} style={{height:50, width:100, resizeMode: 'contain', }} />
        <TouchableOpacity style={styles.ButtonLocation}>
          <Image source={require('../../assets/icons/notification.png')} style={{width:24, height:24, }} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  NavBarView: {
    backgroundColor: '#F7F7F7',
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ButtonLocation: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 30,
  }
})

export default HeaderWithReturn;