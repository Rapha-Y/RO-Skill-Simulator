import React from 'react';
import { StyleSheet, View } from 'react-native';

import SkillData from './data/SkillData.js';
import SkillListItem from './components/SkillListItem.js';

export default function App() {
  return(
    <View style={styles.screen}>
      <SkillListItem skillIcon={SkillData.skill_001.icon} skillName={SkillData.skill_001.name} />
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