import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class AuthScreen extends Component {
  render() { 
    StatusBar.setBarStyle('light-content', true);
   
    return (
      <SafeAreaView style={styles.SafeAreaView}>
          <KeyboardAwareScrollView style={{ backgroundColor: '#212325'}} 
          resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={{flex: 1}} 
          scrollEnabled={false}>
        <View style={styles.CommonView}>
            
          <View style={{ flex: 1 }}/>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../images/message-reply-text-outline.png')} style={{width: 300, resizeMode: 'contain'}}/>
          </View>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', margin: 5}}>
            <Text style={styles.Title}>Вход в приложение</Text>
            <Text style={styles.SubTitle}>Введите свой номер телефона и пароль. Вам поступит SMS-сообщение с кодом проверки</Text>
          </View>
          
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around'}}>
            <View style={ styles.RectangleBorder }>
              <Image source={require('../assets/icons/phone.png')} style={{height:24, width:24,  marginLeft: 15,}} />
              <TextInput style={styles.InputLogin} placeholder="Номер телефона" placeholderTextColor='#897A6C'/>
            </View>
            <View style={ styles.RectangleBorder }>
              <Image source={require('../assets/icons/key.png')} style={{height:24, width:24,  marginLeft: 15,}} />
              <TextInput style={styles.InputPassword} placeholder="Пароль" placeholderTextColor='#897A6C'/>
              <TouchableOpacity style={styles.ButtonGo} onPress={() => this.props.navigation.navigate('Auth')}>
                <Image source={require('../assets/icons/arrow-right.png')} style={{width:24, height:24, }} />
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ flex: 1 }}/>
        </View>
        </KeyboardAwareScrollView>
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
    color: '#F2D7BC',
    textAlign: 'center',
    fontFamily: 'Jost-Medium',
    fontSize: 32,
    lineHeight: 40,
  },
  SubTitle: {
    color: '#9199A1',
    textAlign: 'center',
    fontFamily: 'Jost-Regular',
    fontSize: 16,
  },
  RectangleBorder: {
    backgroundColor: '#323436',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%',
  },
  InputLogin: {
    color: '#F2D7BC',
    width: '90%',
    height: 50,
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Jost-Semibold',
    fontSize: 16
  },
  InputPassword: {
    color: '#F2D7BC',
    width: '75%',
    height: 50,
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Jost-Semibold',
    fontSize: 16
  },
  ButtonGo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#F2D7BC',
    borderRadius: 30,
  }
})

export default AuthScreen;