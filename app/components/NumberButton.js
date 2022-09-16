import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { darkGray } from '../config/colours';

export default NumberButton = (props) => {
    return (
        <View style={styles.btn}>
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
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
    }
})