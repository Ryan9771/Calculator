import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as name from '../config/colours';
import FunctionButton from '../components/FunctionButton';
import OperatorButton from '../components/OperatorButton';
import NumberButton from '../components/NumberButton';
import ZeroButton from '../components/ZeroButton';


export default Calculator = () => {

    const [expr1, setExpr1] = useState(0);
    const [expr2, setExpr2] = useState(0);
    const [res, setRes] = useState(0);
    const [text, setText] = useState('');

    function numHandler(num) {
        setExpr1(num);
        setText(num);
    }






    return (
        <View style={styles.bodyWrapper}>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.txtInput}
                    value={text}
                    onChangeText={setText}
                    editable={false}
                />

            </View>
            <View style={styles.btnWrapper}>
                <View style={styles.row}>
                    <FunctionButton label="AC" />
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
    txtInput: {
        width: "100%",
        height: "50%",
        position: "absolute",
        bottom: -90,
        paddingHorizontal: 41,
        fontSize: 90,
        textAlign: "right",
        color: name.inputText,
        fontWeight: "300"
    }
    
})