import React from 'react';
import { StyleSheet, View } from 'react-native';

import SkillList from '../components/SkillList.js';
import SkillPageHeader from '../components/SkillPageHeader.js';

const SkillSimulator = props => {
    return(
        <View style={styles.screen}>
            <SkillPageHeader onBack={props.onReturn} />
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

export default SkillSimulator;