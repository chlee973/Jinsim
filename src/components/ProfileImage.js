import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ProfileImage = ({ id, image_uri, nickname, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{ uri: image_uri }} />
            <Text style={styles.text}>{nickname}</Text>
        </TouchableOpacity>
    );
};

export default ProfileImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        // backgroundColor: "red",
        // height: 100,
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "black",
    },
    text: {
        textAlign: "center",
        // position: "absolute",
        // top: 40,
    },
});
