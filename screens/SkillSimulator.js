import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import SkillList from '../components/SkillList.js';
import SkillPageHeader from '../components/SkillPageHeader.js';

import LevelData from '../data/LevelData.js';

const SkillSimulator = props => {
    const [firstJobLevel, setFirstJobLevel] = useState(LevelData[0].jobData[0][0]);
    const [firstJobMax, setFirstJobMax] = useState(LevelData[0].jobData[0][1]);
    const [rest, setRest] = useState(LevelData[0].rest);

    const levelHandler = () => {
        setFirstJobLevel(LevelData[0].jobData[0][0]);
        setRest(LevelData[0].rest);
    }

    return(
        <View style={styles.screen}>
            <SkillPageHeader 
                onBack={props.onReturn}
                firstJobLevel={firstJobLevel}
                firstJobMax={firstJobMax}
                rest={rest}
            />
            <SkillList onChange={levelHandler} />
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