import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import socket from "../../socket";
import RadioGroup from "react-native-radio-buttons-group";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setChannel } from "../redux/actions";

const radioButtonsData = [
    {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "몰입캠프 1분반",
        value: "1",
    },
    {
        id: "2",
        label: "몰입캠프 2분반",
        value: "2",
    },
    {
        id: "3",
        label: "몰입캠프 3분반",
        value: "3",
    },
    {
        id: "4",
        label: "몰입캠프 4분반",
        value: "4",
    },
];

const ChangeChannelScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const [password, setPassword] = useState("");
    const { user_id } = useSelector((state) => state.users);
    const { is_signed_in, current_channel, current_room } = useSelector(
        (state) => state.users
    );
    const onPressRadioButton = (radioButtonsArray) => {
        console.log(radioButtonsArray)
        setRadioButtons(radioButtonsArray);
    };
    const onConfirm = () => {
        console.log("onConfirm")
        if(password.length==0)
            return
        const selected = radioButtons.filter(item => (item.selected==true))
        console.log(selected)
        if(selected.length == 0)
            return
        const new_channel = selected[0].label
        const packet = {
            user_id: user_id,
            password: password,
            channel_from: current_channel,
            channel_to: new_channel,
        }
        socket.emit("change_channel", packet, (res) => {
            if(res == true) {
                dispatch(setChannel(new_channel))
                navigation.navigate("메인", {title: new_channel})
            }
            else {
                Alert.alert("잘못된 비밀번호입니다")
            }
        })
    }
    return (
        <View style={styles.container}>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                layout="column"
            />
            <CustomInput 
            placeholder={"비밀번호"}
            setValue={setPassword}
            secureTextEntry={true}
            />
            <CustomButton
            onPress={onConfirm}
            text={"확인"}
             />
        </View>
    );
};

export default ChangeChannelScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});
