import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SkillListItem from '../components/SkillListItem.js';
import SwordmanData from '../data/SwordmanData.js'; 
    
const SkillList = props => {
    return (
        <View style={styles.list}>
            <FlatList 
                data={SwordmanData}
                renderItem={({ item }) => <SkillListItem 
                    onChange={props.onChange}
                    skillIcon={item.icon} 
                    skillLevel={item.level} 
                    skillMaxLevel={item.maxLevel} 
                    skillName={item.name} 
                />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        marginBottom: 80,
    },
});

export default SkillList;