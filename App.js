import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import skillData from './data/swordsman.js';

class FlatListItem extends Component {
  render() {
    return (
      <View style={{padding: 10}}>
        <Text>{this.props.item.name}</Text>
      </View>
    );
  }
}

export default class SkillList extends Component {
  render() {
    return (
      <View>
        <FlatList 
          data={skillData}
          renderItem={({item, id})=>{
            return (
              <FlatListItem
                item={item} 
                id={id}
              />
            );
          }}
        > 
        </FlatList>
      </View>
    );
  }
}