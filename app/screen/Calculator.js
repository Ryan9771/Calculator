import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as name from '../config/colours';
import FunctionButton from '../components/FunctionButton';
import OperatorButton from '../components/OperatorButton';
import NumberButton from '../components/NumberButton';
import ZeroButton from '../components/ZeroButton';

export default Calculator = () => {
    return (
        <View style={styles.bodyWrapper}>
            <View style={styles.inputBox}>

            </View>
            <View style={styles.btnWrapper}>
                <View style={styles.row}>
                    <FunctionButton />
                    <FunctionButton />
                    <FunctionButton />
                    <OperatorButton />
                </View>
                <View style={styles.row}>
                    <NumberButton />
                    <NumberButton />
                    <NumberButton />
                    <OperatorButton />
                </View>
                <View style={styles.row}>
                    <NumberButton />
                    <NumberButton />
                    <NumberButton />
                    <OperatorButton />
                </View>
                <View style={styles.row}>
                    <NumberButton />
                    <NumberButton />
                    <NumberButton />
                    <OperatorButton />
                </View>
                <View style={styles.row}>
                    <ZeroButton />
                    <NumberButton />
                    <OperatorButton />
                </View>
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
    btn: {
        
    },
    inputBox: {
        width: "100%",
        height: "25%",
        position: "absolute",
        top: 0,
    },
    btnWrapper: {
        marginBottom: 15,
        flexDirection: "column",
        width: "100%",
        height: "55%",
        position: "absolute",
        bottom: 50,


    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
    }
})