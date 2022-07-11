import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RoomInfoBox = ({ title, menu, numOfPeople, maxCapacity }) => {
    return (
        <TouchableOpacity onPress={() => {}} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.menu}>{menu}</Text>
            <View style={styles.capacityContainer}>
                <Ionicons name="people" size={20} color="black" />
                <Text
                    style={styles.menu}
                >{`${numOfPeople} / ${maxCapacity}`}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default RoomInfoBox;

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
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 5,
    },
    menu: {},
    capacityContainer: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
