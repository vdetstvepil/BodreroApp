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

import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';

import { useIsFocused} from '@react-navigation/native'; 


export function CartItems ({navigation, cartGoods}) {
    

    const [refreshFlatlist, setRefreshFlatList] = useState(false);

    function removeFromCart(item) {
      console.log(cartGoods);
      var index = cartGoods.indexOf(item);
      if (index > -1) {
        cartGoods.splice(index, 1);
      }

      console.log("deleted");
      console.log(cartGoods);
      setRefreshFlatList(!refreshFlatlist)
    }
   
    const rightButton = (item) =>(
      <SwipeButtonsContainer style={ styles.RightButton}>
           <TouchableOpacity style={ styles.RightViewButton } onPress={() => removeFromCart(item)}>
              <View style={styles.Item}>
                <MaterialCommunityIcons name="trash-can-outline" color='#FFFFFF' size={24}/>
              </View>
            </TouchableOpacity>
      </SwipeButtonsContainer>
  );

    const renderItem = ({ item }) => (
      <SwipeProvider>
            <SwipeItem style={styles.SwipeButton} swipeContainerStyle={styles.SwipeContainer} rightButtons={rightButton(item)}>
            <TouchableOpacity onPress={() => navigation.navigate('Good', { item, cartGoods })}>
              <View style={styles.Item}>
                <Image source={{uri: 'https://imagestoragebodreroapp.blob.core.windows.net/goods/' + item.key + '.png'}} 
                  style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 20, marginRight: 15}} />
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
            </SwipeItem>
        </SwipeProvider>
    );

    /*const renderItem = ({ item }) => (
        <View style={styles.Container}>
      
    </View>
    );*/
    
    return (
        <FlatList
            data={cartGoods}
            numColumns={1}
            renderItem={renderItem} 
            extraData={refreshFlatlist}
        />
    ); 
}


const styles = StyleSheet.create({
    Container: {
      width: '100%',
    },
    Item: {
      flexDirection: 'row',
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
    SwipeButton: {
      width: '100%',
      alignSelf: 'center',
      marginVertical: 5,
      height: 120
    },
    SwipeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingVertical: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
    RightButton: {
      alignSelf: 'center', 
      flexDirection: 'column', 
      height: 120,
      width: 100
    },
    RightViewButton: {
      backgroundColor: '#B12882',
      marginLeft: 10,
      height: 120,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
})