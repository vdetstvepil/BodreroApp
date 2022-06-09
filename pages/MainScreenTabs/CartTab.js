import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

import { ShoppingItems } from './HomeTabComponents/ShoppingItems.js';

class CartTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedButton: 'All',
    };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
}

  render() { 
    return (
        <View style={styles.CommonView}>
          <Text style={styles.Title}>Корзина</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.SubTitle}>У вас лежит </Text>
            <Text style={[styles.SubTitle, {color: '#B12882'}]}>6 товаров</Text>
            <Text style={styles.SubTitle}> в корзине </Text>
          </View>
         
        
          <ShoppingItems navigation={this.props.navigation}/>
        </View>
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