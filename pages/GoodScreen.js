import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';

import HeaderWithReturn from './Panels/HeaderWithReturn.js'
import Map from './LocationScreenComponents/Map.js'
import MapAddressItems from './LocationScreenComponents/MapAddressItems.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useState } from "react";

import { Counter } from './GoodScreenComponents/Counter.js'


class GoodScreen extends Component {
  render() { 
    StatusBar.setBarStyle('dark-content', true);
    const { params } = this.props.navigation.state;
    const counter = 0;
    console.log(params.item.key)
    console.log(params.cartGoods)
    
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <HeaderWithReturn navigation={this.props.navigation}></HeaderWithReturn>
        <View style={{ flex: 1 }}>
          <Image source={{uri: 'https://imagestoragebodreroapp.blob.core.windows.net/goods/' + params.item.key + '.png'}} 
            style={{flex: 5, width: '100%', height: 150,  }} />
          <View style={{flex: 4, }} ></View>
          <View style={{ backgroundColor: 'white', width: '100%', height: '50%', position: 'absolute', borderTopLeftRadius: 20, borderTopRightRadius: 20, bottom: 0}}>
            <View style={styles.CommonView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: '80%'}}>  
                  <Text style={styles.Title}>{params.item.val().title}</Text>
                  <Text style={styles.SubTitle}>{params.item.val().subtitle}</Text>
                </View>
                <View style={{flexDirection: 'row', width: '20%', justifyContent: 'flex-end'}}>
                    <Text style={[{marginRight: 3}, styles.Price]}>₽</Text>
                    <Text style={styles.Price}>{params.item.val().price}</Text>
                </View>
              </View>
              <Text style={styles.Description}>Описание</Text>
              <Text style={styles.SubTitle}>{params.item.val().description}</Text>
            </View>
            <View style={{ width: '100%', height: 70, position: 'absolute', bottom: 0}}>
                <View style={[styles.CommonView]}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                      <View style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
                        <Counter counter={counter}/>
                      </View>
                        <TouchableOpacity style={styles.ButtonHighlight} onPress={() => {params.cartGoods.push([params.item, params.item.key]); console.log(params.cartGoods); console.log(counter)}}>
                            <Text style={styles.HighlightText}>В корзину</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
      Description: {
        marginTop: 16,
        color: '#352C1D',
        textAlign: 'left',
        fontFamily: 'Jost-Semibold',
        fontSize: 20,
      },
      Price: {
        color: '#B12882',
        textAlign: 'right',
        fontFamily: 'Jost-Semibold',
        fontSize: 28,
      },
      ButtonPlusMinus: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderColor: '#9199A1',
        borderWidth: 1,
        borderRadius: 30,
      },
      Count: {
        marginHorizontal: 10,
        color: '#352C1D',
        textAlign: 'left',
        fontFamily: 'Jost-Semibold',
        fontSize: 20,
      },
      ButtonHighlight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
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

export default GoodScreen;