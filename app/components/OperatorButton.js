import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { inputText, orangeBtn } from '../config/colours';


export default OperatorButton = (props) => {

    const flash = useRef(new Animated.Value(0)).current;

    return (
        <TouchableHighlight onPress={() => {
                flash.setValue(5);
                props.handler(props.label);

                Animated.timing(flash, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            }
        }>
            <Animated.View style={[styles.btn, {borderWidth: flash}]}>
                <Text style={styles.text}>{props.label}</Text>
            </Animated.View>
        </TouchableHighlight>
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
        borderColor: "white",
    },
    text: {
        fontSize: 44,
        color: inputText,
        fontWeight: "500",
    }
})