import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileBox = ({like_content, hate_content, image_uri, nickname}) => {
    return (
        <View>
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
            <ProfileImage
                image_uri={
                    image_uri
                }
                nickname={nickname}
            />
        </View>
    );
};

export default ProfileBox;

const styles = StyleSheet.create({
    balloonContainer: {
        width: "100%",
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
