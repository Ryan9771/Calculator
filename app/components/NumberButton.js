import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { darkGray, inputText,  } from '../config/colours';

export default NumberButton = (props) => {
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
        backgroundColor: darkGray,
        marginHorizontal: 7.8,
        marginTop: 1,
        borderRadius: "50%",
        width: 77,
        height: 77,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 40,
        color: inputText,
    }
})