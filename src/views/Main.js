import {
    View,
    Text,
    Image,
    Button,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNickname, setProfileImage } from "../redux/actions";
import ProfileImage from "../components/ProfileImage";
import RoomInfoBox from "../components/RoomInfoBox";
import SpeechBalloon from "../components/SpeechBalloon";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProfileBox from "../components/ProfileBox";
import socket from "../../socket";
import { setRoom } from "../redux/actions";
import { useIsFocused } from "@react-navigation/native";

const Main = ({ navigation }) => {
    const dispatch = useDispatch();
    const [userList, setUserList] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const { user_id } = useSelector((state) => state.users);
    const { nickname, profile_image, current_channel, love, hate } =
        useSelector((state) => state.users);
    const isFocused = useIsFocused();

    const onPressRoomCreate = () => {
        if (current_channel == null) {
            Alert.alert("채널을 선택해주세요");
            return;
        }
        navigation.navigate("방 생성");
    };
    const onPressSignOut = () => {
        navigation.navigate("로그아웃");
    };
    const onPressChangeChannel = () => {
        navigation.navigate("채널 선택");
    };
    const onSelectRoom = (item) => {
        dispatch(setRoom(item.id));
        const packet = {
            user_id: user_id,
            room_id: item.id,
        };
        socket.emit("enter_room", packet, (res) => {
            if (res == true) {
                dispatch(setRoom(item.id));
            } else {
                Alert.alert("방에 입장할 수 없습니다");
            }
        });
    };
    const onPressUserProfile = (item) => {
        navigation.navigate("프로필", {
            user_id: item.id,
            nickname: item.nickname,
        });
    };
    useEffect(() => {
        socket.on("change_channel", async (packet, callback) => {
            setUserList([...packet.rows]);
        });

        socket.on("create_room", async (packet, callback) => {
            setRoomList([...packet.rows]);
            console.log(roomList);
        });
    }, []);
    useEffect(() => {
        navigation.setOptions({
            headerTitle:
                current_channel == null
                    ? "채널을 선택해주세요"
                    : current_channel,
        });
        if (current_channel == null) {
            return;
        }
        const packet_request_users = {
            channel_id: current_channel,
        };
        socket.emit("request_users", packet_request_users, (res) => {
            setUserList([...res.rows]);
        });
        const packet_request_rooms = {
            channel_id: current_channel,
        };
        socket.emit("request_rooms", packet_request_rooms, (res) => {
            setRoomList([...res.rows]);
            console.log(roomList);
            console.log("------------------------fff---");
            console.log(res.rows);
        });
    }, [current_channel, isFocused]);
    return (
        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {userList.map((user, key) => (
                    <ProfileImage
                        id={user.id}
                        image_uri={user.profile_image_url}
                        nickname={user.name}
                        key={key}
                        onPress={onPressUserProfile}
                    />
                ))}
            </ScrollView>
            <Button
                onPress={onPressRoomCreate}
                title={"방 생성"}
                style={styles.button}
            />
            <ScrollView
                style={styles.scrollViewRooms}
                horizontal={false}
                showsVerticalScrollIndicator={true}
            >
                {roomList.map((item, key) => {
                    return (
                        <RoomInfoBox
                            id={item.id}
                            title={item.name}
                            menu={item.menu}
                            numOfPeople={1}
                            maxCapacity={item.max_capacity}
                            onPress={onSelectRoom}
                            key={current_channel * 10 + key}
                        />
                    );
                })}
            </ScrollView>
            <ProfileBox
                like_content={love}
                hate_content={hate}
                image_uri={profile_image}
                nickname={nickname}
            />
            <View style={styles.iconContainer}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={onPressChangeChannel}
                >
                    <FontAwesome name="exchange" size={30} color="black" />
                    <Text>채널 변경</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={onPressSignOut}>
                    <MaterialIcons name="logout" size={30} color="black" />
                    <Text>로그아웃</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "flex-start",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    scrollViewRooms: {
        width: "100%",
        maxHeight: "50%",
    },
    button: {},
    iconContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    icon: {
        alignItems: "center",
    },
});

export default Main;
