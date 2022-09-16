import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { inputText, grayBtn } from '../config/colours';

export default FunctionButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.handler(props.label)}>
            <View style={styles.btn}>
                <Text style={styles.text}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: grayBtn,
        marginHorizontal: 7.8,
        marginTop: 1,
        borderRadius: "50%",
        width: 77,
        height: 77,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 35,
        color: "black",
        fontWeight: "500",
    }
})