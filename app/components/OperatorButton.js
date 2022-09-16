import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { orangeBtn } from '../config/colours';

export default OperatorButton = (props) => {
    return (
        <View style={styles.btn}>
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
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
    }
})