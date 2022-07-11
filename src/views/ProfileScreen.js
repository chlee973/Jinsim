import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ProfileBox from "../components/ProfileBox";
import { FontAwesome5 } from '@expo/vector-icons'; 

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.emptyContainer} />
            <View style={styles.profileContainer}>
                <ProfileBox
                    like_content={"제육볶음"}
                    hate_content={"쟁반짜장"}
                    image_uri={
                        "https://img.etimg.com/thumb/width-640,height-480,imgsize-482493,resizemode-1,msid-68228307/news/politics-and-nation/how-central-european-state-serbia-contributed-to-making-of-uri/uri-indi.jpg"
                    }
                    nickname={"이창해"}
                />
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.icon}/>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome5 name="ban" size={30} color="black" />
                    <Text>강퇴 요청</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        height: "100%",
        // backgroundColor: "yellow",
        justifyContent: "center",
    },
    emptyContainer: {
        flex: 3,
    },
    profileContainer: {
        flex: 1,
        // backgroundColor: "green",
    },
    iconContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    icon: {
        alignItems: "center",
    },
});
