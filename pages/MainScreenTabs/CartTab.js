import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

import { CartItems } from './CartTabComponents/CartItems.js';

import { useIsFocused} from '@react-navigation/native'; 
import { useFocusEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CardItems } from '../CartTabComponents/ShoppingItems.js';


export function CartTab({navigation, cartGoods}) {
    // Эту строчку не трогать, иначе корзина ПОЛЕТИТ АААА
    useIsFocused();
    const [cartItems, setcartItems] = useState([cartGoods]);
    
    useState(() => {
      setcartItems(cartGoods);
    }, cartItems);

    useEffect(() => {
      setcartItems(cartGoods);
    }, cartItems);

    return (
        <View style={styles.CommonView}>
          <Text style={styles.Title}>Корзина</Text>
          <CartItems navigation={navigation} cartGoods={cartItems}/>
        </View>)
}

const styles = StyleSheet.create({
    CommonView: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 30
      },
    Title: {
        color: '#323436',
        textAlign: 'left',
        fontFamily: 'Jost-Semibold',
        fontSize: 32,
        lineHeight: 40,
      },
      SubTitle: {
        color: '#323436',
        textAlign: 'left',
        fontFamily: 'Jost-Semibold',
        fontSize: 16,
      },
      RectangleBorder: {
        marginTop: 20,
        backgroundColor: '#EAEAEB',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
      },
      InputSearch: {
        color: '#362D1C',
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
        backgroundColor: '#B12882',
        borderRadius: 30,
      },
      ItemList: {
        padding: 0,
        marginTop: 20,
      },
      ChipGroup: {
          flexDirection: 'row',
          marginTop: 20,
      },
      Chip: {
        margin: 5,
        padding: 5,
      }
})

export default CartTab;