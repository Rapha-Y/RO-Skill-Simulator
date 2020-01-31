import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import SkillList from '../components/SkillList.js';
import SkillPageHeader from '../components/SkillPageHeader.js';

const SkillSimulator = props => {
    const [firstJobLevel, setFirstJobLevel] = useState(1);
    const [maxfirstJobLevel, setMaxFirstJobLevel] = useState(50);
    const [rest, setRest] = useState(49);

    const levelHandler = firstCost => {
        setFirstJobLevel(firstJobLevel + firstCost);
        setRest(rest - firstCost);
    }

    return(
        <View style={styles.screen}>
            <SkillPageHeader 
                firstJobLv={firstJobLevel} 
                firstJobLvMax={maxfirstJobLevel} 
                onBack={props.onReturn} 
                remainingPoints={rest} 
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