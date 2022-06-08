import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Chip } from 'react-native-paper';

import { ShoppingItem } from '../components/ShoppingItem.js'


class FavoriteScreen extends Component {
  render() { 
    return (
        <View></View>
    )
  }
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
        color: '#9199A1',
        textAlign: 'center',
        fontFamily: 'Jost-Regular',
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

export default FavoriteScreen;