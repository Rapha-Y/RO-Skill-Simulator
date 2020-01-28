import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ClassSelector from './screens/ClassSelector.js';
import SkillSimulator from './screens/SkillSimulator.js';

export default function App() {
  const [job, setJob] = useState('');

  const jobSelectionHandler = job => {
    setJob(job);
    console.log(job);
  }

  let screen = <ClassSelector onJobSelection={jobSelectionHandler} />

  if (job === 'Swordman') {
    screen = <SkillSimulator onReturn={jobSelectionHandler} />
  } else {
    screen = <ClassSelector onJobSelection={jobSelectionHandler} />
  }

  return(
    <View style={styles.screen}>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});