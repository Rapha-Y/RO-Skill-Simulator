import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ClassSelector = props => {
    return(
        <View>
            <TouchableOpacity onPress={() => props.onJobSelection('Swordman')}>
                <Text style={{borderWidth: 1, padding: 20}}>Swordman</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onJobSelection('Archer')}>
                <Text style={{borderWidth: 1, padding: 20}}>Archer</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default ClassSelector;