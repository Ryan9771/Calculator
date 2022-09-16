import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as name from '../config/colours';

export default Calculator = () => {
    return (
        <View style={styles.bodyWrapper}>
            <View style={styles.inputBox}>

            </View>
            <View style={styles.btnWrapper}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyWrapper: {
        flex: 1,
        backgroundColor: name.black,
        flexDirection: "column",
    },
    inputBox: {
        flex: 3
    },
    btnWrapper: {
        flex: 5,
        backgroundColor: "orange",
        paddingTop: 25,
    }
})