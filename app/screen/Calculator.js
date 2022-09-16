import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as name from '../config/colours';
import FunctionButton from '../components/FunctionButton';
import OperatorButton from '../components/OperatorButton';
import NumberButton from '../components/NumberButton';
import ZeroButton from '../components/ZeroButton';

function mod(num1, num2) {
    if (num1 < num2) {
        return -1;
    }
    return num1 - Math.floor(num1 / num2) * num2;
}

export default Calculator = () => {

    const [expr1, setExpr1] = useState(0);
    const [expr2, setExpr2] = useState(0);
    const [res, setRes] = useState(0);
    const [text, setText] = useState('');

    function funcHandler(func) {
        switch(func) {
            case "AC": setText('');
        }
    }

    function getTextSize() {
        if (text.length < 7) {
            return styles.textBig;
        } else if (text.length === 7) {
            return styles.textMedium;
        } else if (text.length === 9) {
            return styles.textSmall;
        } else if (text.length < 11) {
            return styles.textXSmall;
        } else {
            return styles.textXXSmall;
        }
    }

    function numHandler(num) {
        if (text.length < 12) {
            if (mod(text.length + 1, 4) === 0) {
                // Split text to separate commas
                setText(text + ',' + num);
            } else {
                setText(text + num);
            }
        }
    }


    return (
        <View style={styles.bodyWrapper}>
            <View style={styles.inputBox}>
                <TextInput 
                    style={[styles.txtInput, getTextSize()]}
                    value={text}
                    onChangeText={setText}
                    editable={false}
                />

            </View>
            <View style={styles.btnWrapper}>
                <View style={styles.row}>
                    <FunctionButton label="AC" handler={funcHandler}/>
                    <FunctionButton label="±" />
                    <FunctionButton label="%" />
                    <OperatorButton label="÷" />
                </View>
                <View style={styles.row}>
                    <NumberButton label="7" handler={numHandler}/>
                    <NumberButton label="8" handler={numHandler}/>
                    <NumberButton label="9" handler={numHandler}/>
                    <OperatorButton label="x" />
                </View>
                <View style={styles.row}>
                    <NumberButton label="4" handler={numHandler}/>
                    <NumberButton label="5" handler={numHandler}/>
                    <NumberButton label="6" handler={numHandler}/>
                    <OperatorButton label="-" />
                </View>
                <View style={styles.row}>
                    <NumberButton label="1" handler={numHandler}/>
                    <NumberButton label="2" handler={numHandler}/>
                    <NumberButton label="3" handler={numHandler}/>
                    <OperatorButton label="+" />
                </View>
                <View style={styles.row}>
                    <ZeroButton label="0" handler={numHandler}/>
                    <NumberButton label="." />
                    <OperatorButton label="=" />
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
    btnWrapper: {
        marginBottom: 15,
        flexDirection: "column",
        width: "100%",
        height: "55%",
        position: "absolute",
        bottom: 50,
    },
    inputBox: {
        width: "100%",
        height: "25%",
        position: "relative",
        top: 0,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
    },
    textBig: {
        fontSize: 81,
    },
    textMedium: {
        fontSize: 70,
    },
    textSmall: {
        fontSize: 65,
    },
    textXSmall: {
        fontSize: 60,
    },
    textXXSmall: {
        fontSize: 55,
    },
    txtInput: {
        width: "100%",
        height: "50%",
        position: "absolute",
        bottom: -90,
        paddingHorizontal: 41,
        textAlign: "right",
        color: name.inputText,
        fontWeight: "300",
    }
    
})