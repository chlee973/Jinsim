import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileImage from "../components/ProfileImage";
import MenuTextBox from "../components/MenuTextBox";
import { useSelector, useDispatch } from "react-redux";
import socket from "../../socket";

const RoomScreen = ({navigation, room_id, title, menu}) => {
    const { user_id } = useSelector((state) => state.users);
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        navigation.setOptions({headerTitle: title})
        const packet = {
            user_id: user_id,
            room_id: room_id,
        };
        socket.emit("enter_room", packet, (res) => {
            if (res == true) {
                dispatch(setRoom(item.id));
            } else {
                Alert.alert("방에 입장할 수 없습니다");
            }
        });

        socket.on("enter_room", async (packet, callback) => {
            setUserList([...packet.rows]);
        });
    }, [])
    
    const pad_array = (arr, len, fill) => {
        return arr.concat(Array(len).fill(fill)).slice(0, len);
    };
    const image_list = Array(15).fill(
        "https://img.etimg.com/thumb/width-640,height-480,imgsize-482493,resizemode-1,msid-68228307/news/politics-and-nation/how-central-european-state-serbia-contributed-to-making-of-uri/uri-indi.jpg"
    );
    const nickname_list = Array.from(Array(15).keys());

    const padded_image_list = pad_array(
        image_list,
        20,
        "https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
    );
    const padded_nickname_list = pad_array(nickname_list, 20, "");
    const entity_list = padded_image_list.map((x, index) => ({
        uri: x,
        nickname: padded_nickname_list[index],
    }));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.profileContainerHorizontal}>
                {[0, 10, 6, 14, 2]
                    .map((i) => entity_list[i])
                    .map((x, key) => {
                        return (
                            <View style={styles.imageContainer}>
                                <ProfileImage
                                    image_uri={x.uri}
                                    nickname={
                                        x.nickname === "" ? "" : x.nickname + 1
                                    }
                                    key={key}
                                />
                            </View>
                        );
                    })}
            </View>
            <View style={styles.containerVertical}>
                <View style={styles.profileContainerVertical}>
                    {[18, 13, 4, 9, 17]
                        .map((i) => entity_list[i])
                        .map((x, key) => {
                            return (
                                <View style={styles.imageContainer}>
                                    <ProfileImage
                                        image_uri={x.uri}
                                        nickname={
                                            x.nickname === ""
                                                ? ""
                                                : x.nickname + 1
                                        }
                                        key={key}
                                    />
                                </View>
                            );
                        })}
                </View>
                <View style={styles.emptyContainer}>
                    <MenuTextBox text={menu}/>
                </View>
                <View style={styles.profileContainerVertical}>
                    {[16, 8, 5, 12, 19]
                        .map((i) => entity_list[i])
                        .map((x, key) => {
                            return (
                                <View style={styles.imageContainer}>
                                    <ProfileImage
                                        image_uri={x.uri}
                                        nickname={
                                            x.nickname === ""
                                                ? ""
                                                : x.nickname + 1
                                        }
                                        key={key}
                                    />
                                </View>
                            );
                        })}
                </View>
            </View>
            <View style={styles.profileContainerHorizontal}>
                {[3, 15, 7, 11, 1]
                    .map((i) => entity_list[i])
                    .map((x, key) => {
                        return (
                            <View style={styles.imageContainer}>
                                <ProfileImage
                                    image_uri={x.uri}
                                    nickname={
                                        x.nickname === "" ? "" : x.nickname + 1
                                    }
                                    key={key}
                                />
                            </View>
                        );
                    })}
            </View>
        </View>
    );
};

export default RoomScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    profileContainerHorizontal: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerVertical: {
        width: "100%",
        flex: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    profileContainerVertical: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    imageContainer: {
        flex: 1,
        // backgroundColor: "blue",
    },
    emptyContainer: {
        flex: 3,
        // backgroundColor: "yellow",
    },
});
