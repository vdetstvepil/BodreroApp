import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';


export default function Map() {
  
    const mapRef = useRef(null);  
    function Mapper() {
        return (
            <View>
            <MapView ref={mapRef} style={styles.Map} initialRegion={Sretenka}>
                <Marker coordinate={Sretenka} image={require('../../assets/icons/map-marker.png')} onPress={() => goToLocation('Sretenka')}/>
                <Marker coordinate={Petrovka} image={require('../../assets/icons/map-marker.png')} onPress={() => goToLocation('Petrovka')}/>
                <Marker coordinate={Maroseyka} image={require('../../assets/icons/map-marker.png')} onPress={() => goToLocation('Maroseyka')}/>
                <Marker coordinate={Rozhdestvenka} image={require('../../assets/icons/map-marker.png')} onPress={() => goToLocation('Rozhdestvenka')}/>
            </MapView>
            <Text style={styles.Title}>Точки кофейни рядом</Text>

            </View>
        ) 
     }

      const Sretenka = {
        latitude: 55.767679547982056, 
        longitude: 37.63141425348277, 
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      };
      const Petrovka = {
        latitude: 55.765330615752724, 
        longitude: 37.61596815247342,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      };
      const Maroseyka = {
        latitude: 55.75768991558985, 
        longitude: 37.63698417866353,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      };
      const Rozhdestvenka = {
        latitude: 55.76134139525735, 
        longitude: 37.6233860589503,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      };

      const goToLocation = (location) => {
        //Animate the user to new region. Complete this animation in 3 seconds
        if (location === 'Sretenka')
            mapRef.current.animateToRegion(Sretenka, 1 * 1000);
        else if (location === 'Petrovka')
            mapRef.current.animateToRegion(Petrovka, 1 * 1000);
        else if (location === 'Maroseyka')
            mapRef.current.animateToRegion(Maroseyka, 1 * 1000);
        else if (location === 'Rozhdestvenka')
            mapRef.current.animateToRegion(Rozhdestvenka, 1 * 1000);
      };

      return Mapper();
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






