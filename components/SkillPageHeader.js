import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SkillPageHeader = props => {
    return (
        <View style={styles.header}>
            <View style={styles.headerTop}>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={() => props.onBack('')}>
                        <Text style={styles.backButton}>
                            {'<'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Swordman</Text>
                </View>
            </View>
            <View style={styles.skillPointsContainer}>
                <Text style={styles.text}>1st: 50/50   2nd: 70/70   3rd: 60/60   Rest: 177</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: 'gray', 
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 5,
        paddingVertical: 3,
    },
    backContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 30,
    },  
    header: {
        paddingTop: 60,
        width: '100%',
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        textAlign: 'center',
    },
    titleContainer: {
        flex: 8,
        paddingRight: 45,
        paddingTop: 33,
    },
});

export default SkillPageHeader;