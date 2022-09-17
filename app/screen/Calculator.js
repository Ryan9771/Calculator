import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as name from '../config/colours';
import FunctionButton from '../components/FunctionButton';
import OperatorButton from '../components/OperatorButton';
import NumberButton from '../components/NumberButton';
import ZeroButton from '../components/ZeroButton';


export default Calculator = () => {

    const [expr1, setExpr1] = useState(0);
    const [operator, setOperator] = useState(null);
    const [overwrite, setOverwrite] = useState(true);
    const [text, setText] = useState('0');


    /**
     * Handles the light gray function inputs
     */
    function funcHandler(func) {
        switch(func) {
            case "AC": 
                setText('0');
                setOperator(null);
                setExpr1(0);
                break;
            case "±":
                let num = parseFloat(text.replace(/,/g, '')) * -1;
                setText(commafy(num.toString()));
                break;
            case "%":
                let newNum = parseFloat(text.replace(/,/g, '')) / 100;
                setText(commafy(newNum.toString()));
                break;   
            case '.':
                let decimalPresent = false;
                for (let i = 0; i < text.length; i++) {
                    if (text.charAt(i) === '.') {
                        decimalPresent = true;
                    }
                }
                if (!decimalPresent) {
                    setText(text + '.');
                }
                break;
        }
    }


    /**
     * Handles the operators
     */
    function opHandler(op) {
        if (expr1 !== 0) {
            resHandler();
            setOperator(op);
            setOverwrite(true);
        } else {
            setExpr1(parseFloat(text));
            setOperator(op);
            setOverwrite(true);
        }
    }

    
    /**
     * Handles the equals button
     */
    function resHandler() {
        if (text === '') {
            setOperator(null);
        } else if (operator !== null) {
            let exp2 = parseFloat(text);
            let result;
            switch (operator) {
                case '+':
                    result = expr1 + exp2;
                    break;

                case '-':
                    result = expr1 - exp2;
                    break;

                case 'x':
                    result = expr1 * exp2;
                    break;

                case '÷':
                    result = expr1 / exp2;
                    break;
            }
            setExpr1(result);
            setText(result.toString());
            setOperator(null);
        }
    }


    /**
     * Determines the styling of the numbers based on the text sizse
     */
    function getTextSize() {
        if (text.length < 7) {
            return styles.textBig;
        } else if (text.length === 7 || text.length === 8) {
            return styles.textMedium;
        } else if (text.length === 9) {
            return styles.textSmall;
        } else if (text.length > 9 && text.length < 11) {
            return styles.textXSmall;
        } else {
            return styles.textXXSmall;
        }
    }


    /**
     * Commafies the number
     */
    function commafy(num) {
        var noComma = num.replace(/,/g, '');
        var str = noComma.split('.');
        if (str[0].length >= 4) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }


    /**
     * Handles the number inputs, and relays it to the displayed text
     */
    function numHandler(num) {
        if (text.length < 11) {
            if (text === '0' || operator !== null && overwrite) {
                setText(num);
            } else {
                setText(commafy(text + num));
            }
            setOverwrite(false);
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
                    <FunctionButton label="±" handler={funcHandler}/>
                    <FunctionButton label="%" handler={funcHandler}/>
                    <OperatorButton label="÷" handler={opHandler}/>
                </View>
                <View style={styles.row}>
                    <NumberButton label="7" handler={numHandler}/>
                    <NumberButton label="8" handler={numHandler}/>
                    <NumberButton label="9" handler={numHandler}/>
                    <OperatorButton label="x" handler={opHandler}/>
                </View>
                <View style={styles.row}>
                    <NumberButton label="4" handler={numHandler}/>
                    <NumberButton label="5" handler={numHandler}/>
                    <NumberButton label="6" handler={numHandler}/>
                    <OperatorButton label="-" handler={opHandler}/>
                </View>
                <View style={styles.row}>
                    <NumberButton label="1" handler={numHandler}/>
                    <NumberButton label="2" handler={numHandler}/>
                    <NumberButton label="3" handler={numHandler}/>
                    <OperatorButton label="+" handler={opHandler}/>
                </View>
                <View style={styles.row}>
                    <ZeroButton label="0" handler={numHandler}/>
                    <NumberButton label="." handler={funcHandler}/>
                    <OperatorButton label="=" handler={resHandler}/>
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
        paddingRight: 41,
        paddingLeft: 10,
        textAlign: "right",
        color: name.inputText,
        fontWeight: "300",
    }
    
})