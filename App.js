/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Platform,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RestaurantRow from 'components//RestaurantRow'

const restaurants = [{name: 'React Cafe', address: '123 Anywhere Street'}, 
{name: 'Fancy Restaurant', address: '799 Main Street'}, 
{name: 'Taco Place', address: '550 Maple Road'}, 
{name: 'Tony\'s Diner', address: '4104 College St'},
 {name: 'Pasta Central', address: '706 Central St'}, 
 {name: 'Burger Builder', address: '4869 Hamilton Dr'}, 
 {name: 'Pizza Express', address: '1049 Bird St'}, 
 {name: 'Teriyaki To Go', address: '1885 Tea Berry Ln'},
  {name: 'Maroon Deli', address: '1082 Stuart St'},
   {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr'}, 
   {name: 'Dumpling House', address: '747 Kelly Dr'}, 
   {name: 'Hot Chicken', address: '1816 Olive St'}, 
   {name: 'Luna\'s Tap Room', address: '3256 Spirit Dr'}, 
   {name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr'},
    {name: 'Bobby\'s Burgers', address: '4152 Berkley St'}, 
    {name: 'Turnpike Diner', address: '4571 Central Ave'},
     {name: 'Bombay Express', address: '65 Queens Ln'}, 
     {name: 'Coffee Central', address: '3228 Oakwood Cr'},
      {name: 'King\'s Garden', address: '2935 Victoria Ct'},
       {name: 'Salads and More', address: '2454 Preston St'}]

export default class App extends Component {

  state = {
    search: null
  }

  render(){
    return (
      <View style={{
        flex: 1
      }}>
        <Text style = {styles.header}>
          Restaurant Ratings!
        </Text>

        <TextInput style={styles.input}
        placeholder="Live Search"
        onChangeText={text =>{
          this.setState({search: text})
        }}
        value={this.state.search}
        />

      <FlatList
        data = {
          restaurants.filter(place =>{
            return !this.state.search ||
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          })
        }
        renderItem = {({item, index}) => 
          <RestaurantRow place = {item} index = {index} />
        } 

        keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: { // inside javascript objects, which means attributes are colours needs to be in quote
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '300'
  },
  input:{
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }

})