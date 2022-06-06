import React, { Component } from 'react';
import { Image, View, Button, TextInput, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, StatusBar, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Chip } from 'react-native-paper';

import { ShoppingItem } from '../components/ShoppingItem.js'

const DATA = [
    {
      id: '1',
      title: 'Конфи',
      subtitle: 'с черной смородиной',
      category: 'Dessert',
      price: '100',
    },
    {
      id: '2',
      title: 'Конфи',
      subtitle: 'с черной смородиной',
      category: 'Dessert',
      price: '100',
    },
    {
      id: '3',
      title: 'Конфи',
      subtitle: 'с черной смородиной',
      category: 'Dessert',
      price: '100',
    },
    {
        id: '4',
        title: 'Конфи',
        subtitle: 'с черной смородиной',
        category: 'Dessert',
        price: '100',
      },
  ];

class HomeScreen extends Component {
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
    const renderItem = ({ item }) => (
        <ShoppingItem title={item.title} subtitle={item.subtitle} price={item.price} />
      );
    const filteredData = this.state.searchText ? DATA.filter(x =>
          x.title.toLowerCase().includes(this.state.searchText.toLowerCase())
        ) : DATA && this.state.selectedButton ? DATA.filter(x =>
          x.category.toLowerCase().includes(this.state.selectedButton.toLowerCase()) || this.state.selectedButton === 'All'
        ) : DATA;
        const onClick = (status) => () => {
            setStatus(status)
        }
    const chip1 = 'all'
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
        
      <View style={styles.ChipGroup}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <Chip
          label={chip1}
          style={[styles.Chip, { backgroundColor: this.state.selectedButton === "All" ? "#B12882" : "#FFFFFF"}]}
          mode='flat'
          onPress={() => {this.selectionOnPress("All");}}
          theme={{colors: {text: this.state.selectedButton === "All" ? "#FFFFFF" : "#372D1D" }}}>
          Все
        </Chip>
        <Chip
          style={[styles.Chip, { backgroundColor: this.state.selectedButton === "Bakery" ? "#B12882" : "#FFFFFF"}]}
          icon='baguette' mode='flat'
          onPress={() => this.selectionOnPress("Bakery")}
          theme={{colors: {text: this.state.selectedButton === "Bakery" ? "#FFFFFF" : "#372D1D"}}}
          >
          Выпечка
        </Chip>
        <Chip
          style={[styles.Chip, { backgroundColor: this.state.selectedButton === "Coffee" ? "#B12882" : "#FFFFFF"}]}
          icon='coffee' mode='flat'
          onPress={() => this.selectionOnPress("Coffee")}
          theme={{colors: {text: this.state.selectedButton === "Coffee" ? "#FFFFFF" : "#372D1D"}}}
          >
          Кофе
        </Chip>
        <Chip
          style={[styles.Chip, { backgroundColor: this.state.selectedButton === "Dessert" ? "#B12882" : "#FFFFFF"}]}
          icon='cupcake' mode='flat'
          onPress={() => this.selectionOnPress("Dessert")}
          theme={{colors: {text: this.state.selectedButton === "Dessert" ? "#FFFFFF" : "#372D1D"}}}
          >
          Десерты
        </Chip>
        <Chip
          style={[styles.Chip, { backgroundColor: this.state.selectedButton === "Cake" ? "#B12882" : "#FFFFFF"}]}
          icon='cake' mode='flat'
          onPress={() => this.selectionOnPress("Cake")}
          theme={{colors: {text: this.state.selectedButton === "Cake" ? "#FFFFFF" : "#372D1D"}}}
          >
          Торты
        </Chip>
        </ScrollView>
      </View>
     
      




        <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.ItemList}
      />
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
        fontSize: 28,
        lineHeight: 32,
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

export default HomeScreen;