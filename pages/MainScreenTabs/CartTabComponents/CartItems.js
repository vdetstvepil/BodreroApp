import React, { Component } from 'react';
import { Image, View, FlatList, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { useFocusEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';



export function CartItems ({navigation, cartGoods}) {
    const [cartItems, setcartItems] = useState(cartGoods);
    
    useState(() => {
      setcartItems(cartGoods);
    }, [cartItems]);

    useEffect(() => {
      setcartItems(cartGoods);
    }, [cartItems]);

    

    

    const renderItem = ({ item }) => (
        <View style={styles.Container}>
       <TouchableOpacity onPress={() => navigation.navigate('Good', { item, cartGoods })}>
        <View style={styles.Item}>
          <Image source={{uri: 'https://imagestoragebodreroapp.blob.core.windows.net/goods/' + item.key + '.png'}} 
            style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 20, marginRight: 10}} />
            <View>
              <View>
                <Text style={styles.Title}>{item.val().title}</Text>
                <Text style={styles.SubTitle}>{item.val().subtitle}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.Ruble}>₽</Text>
                <Text style={styles.Price}>{item.val().price}</Text>
              </View>
            </View>
        </View>
        </TouchableOpacity>
    </View>
    );
    
    return (
        <FlatList
            data={cartItems}
            numColumns={1}
            renderItem={renderItem} 
        />
    ); 
}


const styles = StyleSheet.create({
    Container: {
      width: '100%',
    },
    Item: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      marginVertical: 3,
      marginHorizontal: 3,
      borderRadius: 30,
      flexDirection: 'row'
    },
    Title: {
      marginTop: 5,
      color: '#352C1D',
      textAlign: 'left',
      fontFamily: 'Jost-Semibold',
      fontSize: 22,
      lineHeight: 40,
    },
    SubTitle: {
      marginTop: -3,
      color: '#9199A1',
      textAlign: 'left',
      fontFamily: 'Jost-Regular',
      fontSize: 14,
      lineHeight: 16,
    },
    Ruble: {
      paddingRight: 3,
      color: '#B12882',
      textAlign: 'left',
      fontFamily: 'Jost-Semibold',
      fontSize: 22,
      lineHeight: 40,
    },
    Price: {
      color: '#B12882',
      textAlign: 'left',
      fontFamily: 'Jost-Semibold',
      fontSize: 22,
      lineHeight: 40,
      width: '60%'
    },
    ButtonGo: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      backgroundColor: '#B12882',
      borderRadius: 30,
    },
})