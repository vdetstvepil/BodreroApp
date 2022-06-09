import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

import { ShoppingItems } from './HomeTabComponents/ShoppingItems.js';

class HomeTab extends Component {
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
          <Text style={styles.Title}>Отличный кофе</Text>
          <Text style={styles.Title}>Всегда и везде!</Text>
        <View style={ styles.RectangleBorder }>
          <Image source={require('../../assets/icons/magnifying-glass.png')} style={{height:24, width:24,  marginLeft: 15,}} />
          <TextInput style={styles.InputSearch} placeholder="Поиск" placeholderTextColor='#928E85' 
           onChangeText={text => this.setState({ searchText: text })}
           value={this.state.searchText}/>
          <TouchableOpacity style={styles.ButtonGo} >
            <MaterialCommunityIcons name="chevron-right" color='#FFFFFF' size={24}/>
          </TouchableOpacity>
        </View>
          <ShoppingItems navigation={this.props.navigation} cartGoods={this.props.cartGoods}/>
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

export default HomeTab;