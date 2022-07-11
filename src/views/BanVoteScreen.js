import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ProfileBox from "../components/ProfileBox";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const BanVoteScreen = () => {
    const remaining_time = 10;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>강퇴 투표!</Text>
            <Text style={styles.remaining_time}>{remaining_time}</Text>
            <View style={styles.profile_container}>
                <ProfileBox
                    like_content={"제육볶음"}
                    hate_content={"쟁반짜장"}
                    image_uri={
                        "https://img.etimg.com/thumb/width-640,height-480,imgsize-482493,resizemode-1,msid-68228307/news/politics-and-nation/how-central-european-state-serbia-contributed-to-making-of-uri/uri-indi.jpg"
                    }
                    nickname={"이창해"}
                />
            </View>
            <View style={styles.icon_container}>
                <TouchableOpacity style={styles.icon}>
                    <Entypo name="circle" size={45} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Feather name="x" size={55} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.empty_container} />
                
        </View>
    );
};

export default BanVoteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
        // backgroundColor: "red",
    },
    remaining_time: {
        fontSize: 45,
        fontWeight: "bold",
        flex: 2,
        // backgroundColor: "blue",
    },
    profile_container: {
        width: "100%",
        alignItems: "center",
        flex: 3,
    },
    icon_container: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    empty_container: {
        flex: 1,
    }
});
