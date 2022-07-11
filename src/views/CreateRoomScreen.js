import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const CreateRoomScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>방 생성</Text>
            <View style={styles.input_container}>
                <View style={styles.description_container}>
                    <Text style={styles.description}>방제</Text>
                </View>
                <View style={styles.text_input_container}>
                    <TextInput
                        style={styles.text_input}
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
            <View style={styles.input_container}>
                <View style={styles.description_container}>
                    <Text style={styles.description}>메뉴</Text>
                </View>
                <View style={styles.text_input_container}>
                    <TextInput
                        style={styles.text_input}
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
            <View style={styles.input_container}>
                <View style={styles.description_container}>
                    <Text style={styles.description}>정원</Text>
                </View>
                <View style={styles.text_input_container}>
                    <TextInput
                        style={styles.text_input}
                        keyboardType="number-pad"
                    />
                </View>
            </View>
            <Button title={"생성"} />
        </View>
    );
};

export default CreateRoomScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    input_container: {
        flexDirection: "row",
        marginVertical: 20,
    },
    description_container: {
        flex: 1,
        justifyContent: "center",
    },
    text_input_container: {
        backgroundColor: "white",
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        flex: 3,
        marginHorizontal: 10,
        maxWidth: 500,
    },
    text_input: {
        height: 50,
    },
    description: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
});
