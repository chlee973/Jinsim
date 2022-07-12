import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { useSelector, useDispatch } from "react-redux";
import socket from "../../socket";
import { setRoom } from "../redux/actions";
const CreateRoomScreen = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [menu, setMenu] = useState("");
    const [maxcapacity, setMaxcapacity] = useState(0);
    const { current_channel } = useSelector((state) => state.users);
    const onPressCreate = () => {
        console.log("버튼 눌렀음");
        console.log(title);
        console.log(menu);
        console.log(maxcapacity);
        const packet = {
            name: title,
            menu: menu,
            max_capacity: maxcapacity,
            channel_id: current_channel,
        };
        console.log(packet);
        socket.emit("create_room", packet, (res) => {
            console.log("emit 완료");
            if (res != null) {
                dispatch(setRoom(res.room_id));
            } else {
                Alert.alert("방을 생성할 수 없습니다.");
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <View style={styles.description_container}>
                    <Text style={styles.description}>방제</Text>
                </View>
                <View style={styles.text_input_container}>
                    <TextInput
                        style={styles.text_input}
                        clearButtonMode="while-editing"
                        onChangeText={setTitle}
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
                        onChangeText={setTitle}
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
                        onChangeText={setMaxcapacity}
                    />
                </View>
            </View>
            <Button title={"생성"} onPress={onPressCreate} />
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
