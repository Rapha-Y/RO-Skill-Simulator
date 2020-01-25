import React from 'react';
import { StyleSheet, View } from 'react-native';

import SkillList from './components/SkillList.js';

export default function App() {
  return(
    <View style={styles.screen}>
      <SkillList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: 'rgb(50, 50, 50)',
    flex: 1,
    justifyContent: 'center',
  },
});