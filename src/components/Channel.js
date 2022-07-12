import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Channel = ({id, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{`몰입캠프 ${id}분반`}</Text>
        </TouchableOpacity>
    );
};

export default Channel;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        marginVertical: 5,
        paddingVertical: 10,
        borderRadius: 20,
        // blurRadius: 10,
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 5,
    },
});
