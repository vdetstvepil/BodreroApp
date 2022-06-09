import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, Icon, StatusBar, KeyboardAvoidingView } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useState } from "react";


export const Counter = ({counter}) => {
    
    const [count, setCount] = useState(1);
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
           <TouchableOpacity style={styles.ButtonPlusMinus} onPress={() => {if (count > 1) setCount(count - 1); counter = count; }} >
              <MaterialCommunityIcons name="minus" color='#352C1D' size={24}/>
            </TouchableOpacity>
            <Text style={styles.Count}>{count}</Text>
            <TouchableOpacity style={styles.ButtonPlusMinus} onPress={() => {if (count < 10) setCount(count + 1); counter = count; }}>
                <MaterialCommunityIcons name="plus" color='#352C1D' size={24}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
})