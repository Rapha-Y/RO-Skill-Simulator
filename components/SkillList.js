import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SkillListItem from '../components/SkillListItem.js';
import SwordmanData from '../data/SwordmanData.js'; 

const SkillList = props => {
    return (
        <View>
            <FlatList 
                data={SwordmanData}
                renderItem={({ item }) => <SkillListItem skillIcon={item.icon} skillName={item.name} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SkillList;