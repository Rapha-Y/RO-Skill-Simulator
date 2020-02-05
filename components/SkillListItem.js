import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SwordmanData from '../data/SwordmanData';
import LevelData from '../data/LevelData.js';

const SkillListItem = props => {
    const [levelUpdater, setLevelUpdater] = useState();

    const getSkillIcon = skillID => {
        return SwordmanData.filter((item) => item.id == skillID).map(({icon}) => ({icon}))[0].icon;
    }

    const getSkillName = skillID => {
        return SwordmanData.filter((item) => item.id == skillID).map(({name}) => ({name}))[0].name;
    }

    const getSkillLevel = skillID => {
        return SwordmanData.filter((item) => item.id == skillID).map(({level}) => ({level}))[0].level;
    }

    const getSkillMaxLevel = skillID => {
        return SwordmanData.filter((item) => item.id == skillID).map(({maxLevel}) => ({maxLevel}))[0].maxLevel;
    }

    const buttonPressHandler = (buttonType, skillID, changeFunc) => {
        var listPosition = SwordmanData.findIndex(obj => obj.id === skillID);

        var preChangeLevel = SwordmanData[listPosition].level; // ugly fix

        if (buttonType === 'min') {
            SwordmanData[listPosition].level = 0;

            var i, dependentItem, dependentPosition;
            for (i=0;i<SwordmanData[listPosition].dependent.length;i++) {
                dependentItem = SwordmanData[listPosition].dependent[i];
                dependentPosition = SwordmanData.findIndex(obj => obj.id === dependentItem[0]);
                if (SwordmanData[listPosition].level < dependentItem[1]) {

                    var dependentPreChangeLevel = SwordmanData[dependentPosition].level; // ugly fix

                    SwordmanData[dependentPosition].level = 0;

                    /* ugly fix */
                    var dependentPostChangeLevel = SwordmanData[dependentPosition].level;
                    LevelData[0].jobData[0][0] += (dependentPostChangeLevel-dependentPreChangeLevel);
                    LevelData[0].rest -= (dependentPostChangeLevel-dependentPreChangeLevel);

                    buttonPressHandler('sub-propagation', dependentItem[0], changeFunc);
                }
            }
        } else if (buttonType === 'sub') {
            if (SwordmanData[listPosition].level > 0) {
                SwordmanData[listPosition].level--;
            }

            var i, dependentItem, dependentPosition;
            for (i=0;i<SwordmanData[listPosition].dependent.length;i++) {
                dependentItem = SwordmanData[listPosition].dependent[i];
                dependentPosition = SwordmanData.findIndex(obj => obj.id === dependentItem[0]);
                if (SwordmanData[listPosition].level < dependentItem[1]) {

                    var dependentPreChangeLevel = SwordmanData[dependentPosition].level; // ugly fix

                    SwordmanData[dependentPosition].level = 0;

                    /* ugly fix */
                    var dependentPostChangeLevel = SwordmanData[dependentPosition].level;
                    LevelData[0].jobData[0][0] += (dependentPostChangeLevel-dependentPreChangeLevel);
                    LevelData[0].rest -= (dependentPostChangeLevel-dependentPreChangeLevel);

                    buttonPressHandler('sub-propagation', dependentItem[0], changeFunc);
                }
            }
        } else if (buttonType === 'add') {
            if (SwordmanData[listPosition].level < SwordmanData[listPosition].maxLevel) {
                SwordmanData[listPosition].level++;

                var i, preReqItem, preReqPosition;
                for (i=0;i<SwordmanData[listPosition].preReq.length;i++) {
                    preReqItem = SwordmanData[listPosition].preReq[i];
                    preReqPosition = SwordmanData.findIndex(obj => obj.id === preReqItem[0]);
                    if (SwordmanData[preReqPosition].level < preReqItem[1]) {

                        var preReqPreChangeLevel = SwordmanData[preReqPosition].level; // ugly fix

                        SwordmanData[preReqPosition].level = preReqItem[1];

                        /* ugly fix */
                        var preReqPostChangeLevel = SwordmanData[preReqPosition].level;
                        LevelData[0].jobData[0][0] += (preReqPostChangeLevel-preReqPreChangeLevel);
                        LevelData[0].rest -= (preReqPostChangeLevel-preReqPreChangeLevel);

                        buttonPressHandler('add-propagation', preReqItem[0], changeFunc);
                    }
                }
            }
        } else if (buttonType === 'max') {
            SwordmanData[listPosition].level = SwordmanData[listPosition].maxLevel;

            var i, preReqItem, preReqPosition;
            for (i=0;i<SwordmanData[listPosition].preReq.length;i++) {
                preReqItem = SwordmanData[listPosition].preReq[i];
                preReqPosition = SwordmanData.findIndex(obj => obj.id === preReqItem[0]);
                if (SwordmanData[preReqPosition].level < preReqItem[1]) {

                    var preReqPreChangeLevel = SwordmanData[preReqPosition].level; // ugly fix

                    SwordmanData[preReqPosition].level = preReqItem[1];

                    /* ugly fix */
                    var preReqPostChangeLevel = SwordmanData[preReqPosition].level;
                    LevelData[0].jobData[0][0] += (preReqPostChangeLevel-preReqPreChangeLevel);
                    LevelData[0].rest -= (preReqPostChangeLevel-preReqPreChangeLevel);

                    buttonPressHandler('add-propagation', preReqItem[0], changeFunc);
                }
            }
        } else if (buttonType == 'sub-propagation') {
            var i, dependentItem, dependentPosition;
            for (i=0;i<SwordmanData[listPosition].dependent.length;i++) {
                dependentItem = SwordmanData[listPosition].dependent[i];
                dependentPosition = SwordmanData.findIndex(obj => obj.id === dependentItem[0]);
                if (SwordmanData[listPosition].level < dependentItem[1]) {

                    var dependentPreChangeLevel = SwordmanData[dependentPosition].level; // ugly fix

                    SwordmanData[dependentPosition].level = 0;

                    /* ugly fix */
                    var dependentPostChangeLevel = SwordmanData[dependentPosition].level;
                    LevelData[0].jobData[0][0] += (dependentPostChangeLevel-dependentPreChangeLevel);
                    LevelData[0].rest -= (dependentPostChangeLevel-dependentPreChangeLevel);

                    buttonPressHandler('sub-propagation', dependentItem[0], changeFunc);
                }
            }
        } else if (buttonType == 'add-propagation') {
            var i, preReqItem, preReqPosition;
            for (i=0;i<SwordmanData[listPosition].preReq.length;i++) {
                preReqItem = SwordmanData[listPosition].preReq[i];
                preReqPosition = SwordmanData.findIndex(obj => obj.id === preReqItem[0]);
                if (SwordmanData[preReqPosition].level < preReqItem[1]) {
                    
                    var dependentPreChangeLevel = SwordmanData[dependentPosition].level; // ugly fix
                   
                    SwordmanData[preReqPosition].level = preReqItem[1];

                    /* ugly fix */
                    var preReqPostChangeLevel = SwordmanData[preReqPosition].level;
                    LevelData[0].jobData[0][0] += (preReqPostChangeLevel-preReqPreChangeLevel);
                    LevelData[0].rest -= (preReqPostChangeLevel-preReqPreChangeLevel);

                    buttonPressHandler('add-propagation', preReqItem[0], changeFunc);
                }
            }
        }
        setLevelUpdater(SwordmanData[listPosition].level);

        /* ugly fix */
        var postChangeLevel = SwordmanData[listPosition].level;
        LevelData[0].jobData[0][0] += (postChangeLevel-preChangeLevel);
        LevelData[0].rest -= (postChangeLevel-preChangeLevel);

        changeFunc();
    }

    return (
        <View style={styles.item}>
            <View style={styles.skill}>
                <Image source={getSkillIcon(props.skillID)}/>
                <View style={styles.itemText}>
                    <Text style={styles.skillName}>{getSkillName(props.skillID)}</Text>
                </View>
            </View>
            <View style={styles.interface}>
                <TouchableOpacity onPress={() => {buttonPressHandler('min', props.skillID, props.onChange)}} 
                                  style={styles.button}>
                    <Text style={styles.buttonText}>min</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {buttonPressHandler('sub', props.skillID, props.onChange)}}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>sub</Text>
                </TouchableOpacity>
                <View style={styles.skillLevel}>
                    <Text style={styles.skillLevelText}>{getSkillLevel(props.skillID)}/{getSkillMaxLevel(props.skillID)}</Text>
                </View>
                <TouchableOpacity onPress={() => {buttonPressHandler('add', props.skillID, props.onChange)}} 
                                  style={styles.button}>
                    <Text style={styles.buttonText}>add</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {buttonPressHandler('max', props.skillID, props.onChange)}} 
                                  style={styles.button}>
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