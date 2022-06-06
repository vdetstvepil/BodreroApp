import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export const ShoppingItem = ({ title, subtitle, price }) => (
    <View style={styles.Container}>
       <TouchableOpacity>
        <View style={styles.Item}>
          <Image source={require('../../images/confetti.png')} style={{width: '100%', height: 150, resizeMode: 'contain', borderRadius: 20}} />
          <View>
            <Text style={styles.Title}>{title}</Text>
            <Text style={styles.SubTitle}>{subtitle}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <Text style={styles.Ruble}>₽</Text>
            <Text style={styles.Price}>{price}</Text>
            <TouchableOpacity style={styles.ButtonGo} >
             <MaterialCommunityIcons name="plus" color='#FFFFFF' size={24}/>
           </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
    </View>
  );
  

const styles = StyleSheet.create({
    Container: {
      width: '50%',
    },
    Item: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      marginVertical: 3,
      marginHorizontal: 3,
      borderRadius: 30
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
      marginTop: -3,
      color: '#9199A1',
      textAlign: 'left',
      fontFamily: 'Jost-Regular',
      fontSize: 14,
      lineHeight: 16,
    },
    Ruble: {
      paddingRight: 3,
      color: '#96928A',
      textAlign: 'left',
      fontFamily: 'Jost-Semibold',
      fontSize: 28,
      lineHeight: 40,
    },
    Price: {
      color: '#352C1D',
      textAlign: 'left',
      fontFamily: 'Jost-Semibold',
      fontSize: 28,
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
