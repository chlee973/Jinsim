import { Animated, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef } from "react";
import React from "react";

const MenuTextBox = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default MenuTextBox;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight:"bold",
        letterSpacing: 5,
        fontStyle: "italic",
    },
});
