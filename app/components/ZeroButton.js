import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { darkGray, inputText } from '../config/colours';

export default NumberButton = (props) => {
    return (
        <TouchableHighlight onPress={() => props.handler(props.label)}>
            <View style={styles.btn}>
             <Text style={styles.text}>{props.label}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: darkGray,
        marginHorizontal: 7.8,
        marginTop: 1,
        borderRadius: "50%",
        width: 166,
        height: 77,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    text: {
        fontSize: 42,
        color: inputText,
        marginLeft: 26,
    }
})