import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SkillListItem = props => {
    const [currentLevel, setCurrentLevel] = useState(0);
    const [maxLevel, setMaxLevel] = useState(props.skillMaxLevel);

    const changeCurrentLevel = changeType => {
        if (changeType === 'min') {
            setCurrentLevel(0);
        } else if (changeType === 'sub') {
            if(currentLevel > 0) {
                setCurrentLevel(currentLevel-1);
            }
        } else if (changeType === 'add') {
            if(currentLevel < maxLevel) {
                setCurrentLevel(currentLevel+1);
            }
        } else if (changeType === 'max') {
            setCurrentLevel(maxLevel);
        }
    }

    return (
        <View style={styles.item}>
            <View style={styles.skill}>
                <Image source={props.skillIcon}/>
                <View style={styles.itemText}>
                    <Text style={styles.skillName}>{props.skillName}</Text>
                </View>
            </View>
            <View style={styles.interface}>
                <TouchableOpacity onPress={changeCurrentLevel.bind(this, 'min')} style={styles.button}>
                    <Text style={styles.buttonText}>min</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeCurrentLevel.bind(this, 'sub')} style={styles.button}>
                    <Text style={styles.buttonText}>sub</Text>
                </TouchableOpacity>
                <View style={styles.skillLevel}>
                    <Text style={styles.skillLevelText}>{currentLevel}/{maxLevel}</Text>
                </View>
                <TouchableOpacity onPress={changeCurrentLevel.bind(this, 'add')} style={styles.button}>
                    <Text style={styles.buttonText}>add</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeCurrentLevel.bind(this, 'max')} style={styles.button}>
                    <Text style={styles.buttonText}>max</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgb(255, 213, 9)',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: 'black',
    },
    interface: {
        alignItems: 'center',
        backgroundColor: 'rgb(150, 150, 150)',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    item: {
        borderColor: 'black',
        borderWidth: 1,
        width: 360,
    },
    itemText: {
        paddingLeft: 10,
    },
    skill: {
        alignItems: 'center',
        backgroundColor: 'rgb(75, 75, 75)',
        flexDirection: 'row',
        height: 40,
        padding: 10,
    },
    skillLevel: {
        alignItems: 'center',
        backgroundColor: 'rgb(75, 75, 75)',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        width: 58,
    },
    skillLevelText: {
        color: 'white',
    },
    skillName: {
        color: 'white',
        fontSize: 16,
    },
});

export default SkillListItem;