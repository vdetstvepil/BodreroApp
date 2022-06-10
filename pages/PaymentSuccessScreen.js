import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';

import Header from './Panels/Header.js'
import Map from './LocationScreenComponents/Map.js'
import MapAddressItems from './LocationScreenComponents/MapAddressItems.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useState } from "react";

import { Counter } from './GoodScreenComponents/Counter.js'

import { useIsFocused} from '@react-navigation/native'; 


class PaymentSuccessScreen extends Component {
  render() { 
    StatusBar.setBarStyle('dark-content', true);
    const { params } = this.props.navigation.state;

    const SumElement = ({cartGoods}) => {
        var sum = 0;
        console.log(cartGoods);
        for (var index = 0; index < cartGoods.length; index++) 
            sum += cartGoods[index].val().price;

        return  <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Text style={[styles.Title, {fontSize: 24, width: '50%'}]}>Итого</Text>
            <Text style={[styles.Title, {fontSize: 24, width: '50%', color: '#B12882', textAlign: 'right'}]}>₽{sum}</Text>
            </View>;
    }
    
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={{flex: 1}}/>
        <View style={[styles.CommonView, { flex: 2, alignItems: 'center', justifyContent: 'center' }]}>
          <View style={[styles.CheckoutView, { padding: 20 }]}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image source={require('./images/checked.png')} style={{height: 200, resizeMode: 'contain'}}/> 
           <Text style={[{fontSize: 14, marginTop: 20, fontFamily: 'Jost-Semibold', color: '#B12882', textAlign: 'center'}]}>Отлично!</Text>
           <Text style={[styles.Title, {marginTop: 0, fontSize: 28, textAlign: 'center'}]}>Оплачено</Text>
           <SumElement cartGoods={params.cartGoods}/>
          </View>
          </View>
           
            
        </View>
        <View style={{flex: 2}}/>
        <View style={{ width: '100%', height: 70, position: 'absolute', bottom: 20}}>
                <View style={[styles.CommonView]}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <TouchableOpacity style={styles.ButtonHighlight} onPress={() => { params.cartGoods = []; params.navigation.navigate('Main'); }}>
                            <Text style={styles.HighlightText}>Вернуться в главное меню</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 10
      },
      Title: {
        marginTop: 5,
        color: '#352C1D',
        textAlign: 'left',
        fontFamily: 'Jost-Semibold',
        fontSize: 28,
        lineHeight: 40,
      },
      SubTitle: {
        marginTop: 0,
        color: '#9199A1',
        textAlign: 'left',
        fontFamily: 'Jost-Regular',
        fontSize: 14,
      },
      RectangleBorder: {
        borderRadius: 10,
        borderColor: '#B12882',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
      },
      InputLogin: {
        color: '#352C1D',
        height: 50,
        borderRadius: 10,
        padding: 10,
        fontFamily: 'Jost-Semibold',
        fontSize: 16
      },
      ButtonHighlight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
      },
      HighlightText: {
        color: '#B12882',
        textAlign: 'center',
        fontFamily: 'Jost-Semibold',
        fontSize: 20,
      },
      CheckoutView: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: '80%'
      }
})

export default PaymentSuccessScreen;