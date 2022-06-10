import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';

import HeaderWithReturn from './Panels/HeaderWithReturn.js'
import Map from './LocationScreenComponents/Map.js'
import MapAddressItems from './LocationScreenComponents/MapAddressItems.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useState } from "react";

import { Counter } from './GoodScreenComponents/Counter.js'

import { useIsFocused} from '@react-navigation/native'; 


class CheckoutScreen extends Component {
  render() { 
    StatusBar.setBarStyle('dark-content', true);
    const { params } = this.props.navigation.state;
    const navigation = params.navigation;
    const cartGoods = params.cartGoods;

    const SumElement = ({cartGoods}) => {
        var sum = 0;
        console.log(cartGoods);
        for (var index = 0; index < cartGoods.length; index++) 
            sum += cartGoods[index].val().price;

        return  <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Text style={[styles.Title, {fontSize: 24, width: '80%'}]}>Итого</Text>
            <Text style={[styles.Title, {fontSize: 24, width: '20%', color: '#B12882', textAlign: 'right'}]}>₽{sum}</Text>
            </View>;
    }
    
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <HeaderWithReturn navigation={this.props.navigation}></HeaderWithReturn>
        <View style={[styles.CommonView, { flex: 1 }]}>
            <Text style={styles.Title}>Оформление заказа</Text>
            <Text style={[styles.Title, {fontSize: 24}]}>Адрес доставки</Text>
            <Text style={[styles.SubTitle, {fontFamily: 'Jost-Medium'}]}>Улица</Text>
            <View style={ styles.RectangleBorder }>
              <TextInput returnKeyType="done" style={[styles.InputLogin, {textAlign: 'left', width: '100%'}]}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{flex: 1, paddingHorizontal: 2}}>
                    <Text style={[styles.SubTitle, {fontFamily: 'Jost-Medium', textAlign: 'center'}]}>Подъезд</Text>
                    <View style={ styles.RectangleBorder }>
                    <TextInput returnKeyType={ 'done' } keyboardType = 'numeric' style={[styles.InputLogin, {textAlign: 'center', width: '100%'}]}/>
                    </View>
                </View>
                <View style={{flex: 1, paddingHorizontal: 2}}>
                    <Text style={[styles.SubTitle, {fontFamily: 'Jost-Medium', textAlign: 'center'}]}>Домофон</Text>
                    <View style={ styles.RectangleBorder }>
                    <TextInput returnKeyType={ 'done' } blurOnSubmit={false} keyboardType = 'numeric' style={[styles.InputLogin, {textAlign: 'center', width: '100%'}]}/>
                    </View>
                </View>
                <View style={{flex: 1, paddingHorizontal: 2}}>
                    <Text style={[styles.SubTitle, {fontFamily: 'Jost-Medium', textAlign: 'center'}]}>Этаж</Text>
                    <View style={ styles.RectangleBorder }>
                    <TextInput returnKeyType={ 'done' } keyboardType = 'numeric' style={[styles.InputLogin, {textAlign: 'center', width: '100%'}]}/>
                    </View>
                </View>
                <View style={{flex: 1, paddingHorizontal: 2}}>
                    <Text style={[styles.SubTitle, {fontFamily: 'Jost-Medium', textAlign: 'center'}]}>Квартира</Text>
                    <View style={ styles.RectangleBorder }>
                    <TextInput returnKeyType={ 'done' } keyboardType = 'numeric' style={[styles.InputLogin, {textAlign: 'center', width: '100%'}]}/>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 2, marginTop: 10}}>
                    <Text style={[styles.SubTitle, {fontFamily: 'Jost-Medium'}]}>Номер телефона</Text>
                    <View style={ styles.RectangleBorder }>
                    <TextInput returnKeyType={ 'done' } keyboardType = 'phone-pad' style={[styles.InputLogin, {textAlign: 'left', width: '100%'}]}/>
                    </View>
            </View>
            
        </View>
        <View style={{ width: '100%', height: 120, position: 'absolute', bottom: 20}}>
                <View style={[styles.CommonView]}>
                    <SumElement cartGoods={params.cartGoods}/>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <TouchableOpacity style={styles.ButtonHighlight} onPress={() => params.navigation.navigate('PaymentSuccess', { navigation, cartGoods })}>
                            <Text style={styles.HighlightText}>Оплатить заказ</Text>
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
        backgroundColor: '#B12882',
        borderRadius: 30,
      },
      HighlightText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Jost-Semibold',
        fontSize: 20,
      }
})

export default CheckoutScreen;