import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileImage from "./ProfileImage";
import SpeechBalloon from "./SpeechBalloon";

const ProfileBox = ({ like_content, hate_content, image_uri, nickname }) => {
    return (
        <View style={styles.container}>
            <View style={styles.balloonContainer}>
                <SpeechBalloon
                    style={styles.balloon}
                    title={"LIKE"}
                    content={like_content}
                    isLeft={true}
                />
                <SpeechBalloon
                    style={styles.balloon}
                    title={"HATE"}
                    content={hate_content}
                    isLeft={false}
                />
            </View>
            <ProfileImage image_uri={image_uri} nickname={nickname} />
        </View>
    );
};

export default ProfileBox;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
    balloonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
