import React, { Component } from 'react';
import { Image, View, Button, Alert, SafeAreaView, StyleSheet, Text } from 'react-native';

class App extends Component {
  render() { 
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={{backgroundColor: 'yellow', flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Image 
            source = {require('./images/bodrero-logo.png')} 
            style = {{ width: 200, height: 200, resizeMode: 'contain'}}/>
        </View>
        <View style={{backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.Title}>sound</Text>
        </View>
        <View style={{backgroundColor: 'blue', flex: 1}}>
  
        </View>
        <View style={{backgroundColor: 'blue', flex: 1}}>
  
        </View>
      
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: 'red',
    flex: 1
  },
  Title: {
    textAlign: 'center',
    fontFamily: "Jost-SemiBold",
    fontSize: 48,
  }
})

export default App;