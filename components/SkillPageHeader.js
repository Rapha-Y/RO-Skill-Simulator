import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SkillPageHeader = props => {
    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Swordman</Text>
            </View>
            <View style={styles.skillPointsContainer}>
                <Text style={styles.text}>1st: 50/50   2nd: 70/70   3rd: 60/60   Rest: 177</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    skillPointsContainer: {
        padding: 10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleContainer: {
        alignItems: 'center',
        paddingTop: 30,
    },
});

export default SkillPageHeader;