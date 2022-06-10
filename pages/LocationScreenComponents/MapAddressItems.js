import React, { Component } from 'react';
import { Image, View, FlatList, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

export default function MapAddressItems() {
    const [locations, setLocations] = useState({});
    
    useEffect(() => {
    database()
      .ref('/locations')
      .on('value', snapshot => {
      console.log('User data: ', snapshot.val()['header']);

      let LocationObjectArray = [];
      snapshot.forEach( child => {
        LocationObjectArray.push(child);
        console.log(child.val().header);
      });

      setLocations(LocationObjectArray);
    });
   
    }, []);

    const renderItem = ({ item }) => (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 10}}>
            <TouchableOpacity style={{width: '100%'}}>
            <View>
            <Text style={styles.Header}>{item.val().title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons name="map-marker" color='#9199A1' size={18} style={{paddingRight: 5}}/>
                <Text style={styles.SecondaryText}>{item.val().address}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                <Text style={styles.PrimaryText}>Часы работы: </Text>
                <Text style={styles.SecondaryText}>{item.val().timeopen} - {item.val().timeclose}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
                <Text style={styles.PrimaryText}>Телефон: </Text>
                <Text style={styles.SecondaryText}>{item.val().phone}</Text>
            </View>
            </View>
            </TouchableOpacity>
            
        </View>
    );
    
    return (
        <FlatList
            data={locations}
            renderItem={renderItem} 
        />
    ); 
}


const styles = StyleSheet.create({
  SafeAreaView: {
      backgroundColor: '#F7F7F7',
      flex: 1
    },
    CommonView: {
      backgroundColor: '#F7F7F7',
      flex: 1,
      padding: 20
    },
  Title: {
      color: '#323436',
      textAlign: 'left',
      fontFamily: 'Jost-Semibold',
      fontSize: 28,
      lineHeight: 40,
      marginTop: 15
    },
  Map: {
    height: 250,
    borderRadius: 20
  },
  Header: {
    color: '#323436',
    textAlign: 'left',
    fontFamily: 'Jost-Semibold',
    fontSize: 22,
    lineHeight: 40,
    marginTop: 15
  },
  SecondaryText: {
    color: '#9199A1',
    textAlign: 'left',
    fontFamily: 'Jost-Regular',
    fontSize: 16,
  },
  PrimaryText: {
    color: '#323436',
    textAlign: 'left',
    fontFamily: 'Jost-Semibold',
    fontSize: 16,
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






