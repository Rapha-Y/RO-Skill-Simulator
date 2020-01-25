import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';

const SkillListItem = props => {
    return (
        <View style={styles.item}>
            <View style={styles.skill}>
                <Image source={props.skillIcon}/>
                <View style={styles.itemText}>
                    <Text style={styles.skillName}>{props.skillName}</Text>
                </View>
            </View>
            <View style={styles.interface}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>min</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>sub</Text>
                </TouchableOpacity>
                <View style={styles.skillLevel}>
                    <Text style={styles.skillLevelText}>10/10</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
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
        height: 60,
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
        fontSize: 18,
    },
});

export default SkillListItem;