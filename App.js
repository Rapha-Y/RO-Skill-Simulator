import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      //FlatList being used inside ScrollView takes away FlatList advantages (renders everything), find solution
      <ScrollView>
          <Text style={styles.title}>Swordsman</Text>
          <FlatList
            data={[
              {key: 'Bash'},
              {key: 'Endure'},
              {key: 'Increase HP Recovery'},
              {key: 'Magnum Break'},
              {key: 'Provoke'},
              {key: 'Sword Mastery'},
              {key: 'Two-Handed Sword Mastery'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
          <Text style={styles.title}>Knight</Text>
          <FlatList
            data={[
              {key: 'Bowling Bash'},
              {key: 'Brandish Spear'},
              {key: 'Cavalier Mastery'},
              {key: 'Counter Attack'},
              {key: 'Peco Peco Ride'},
              {key: 'Pierce'},
              {key: 'Spear Boomerang'},
              {key: 'Spear Mastery'},
              {key: 'Spear Stab'},
              {key: 'Twohand Quicken'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
  },
  item: {
    padding: 10,
  }
})