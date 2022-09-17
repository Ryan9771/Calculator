import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { inputText, orangeBtn } from '../config/colours';

export default OperatorButton = (props) => {
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
        backgroundColor: orangeBtn,
        borderRadius: "50%",
        marginHorizontal: 7.8,
        marginTop: 1,
        width: 77,
        height: 77,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 44,
        color: inputText,
        fontWeight: "500",
    }
})