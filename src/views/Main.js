import {
    View,
    Text,
    Image,
    Button,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNickname, setProfileImage } from "../redux/actions";
import ProfileImage from "../components/ProfileImage";
import RoomInfoBox from "../components/RoomInfoBox";
import SpeechBalloon from "../components/SpeechBalloon";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProfileBox from "../components/ProfileBox";

const qs = require("qs");
const axios = require("axios");

const REST_API_KEY = "7bdb6912e4211d56037b4ddb88b84488";
const LOGOUT_REDIRECT_URI = "http://192.249.18.145/oauth/kakao/logout";

const Main = ({ navigation }) => {
    // const { nickname, profile_image } = useSelector((state) => state.users);
    // const dispatch = useDispatch();
    // const onSignOutKakaoPress = async () => {
    //     navigation.navigate("Kakao Sign Out");
    // };
    const onPressRoomCreate = () => {};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>몰입캠프 2분반</Text>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.scrollViewUsers}
                horizontal={true}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, key) => {
                    return (
                        <ProfileImage
                            image_uri={
                                "https://img.etimg.com/thumb/width-640,height-480,imgsize-482493,resizemode-1,msid-68228307/news/politics-and-nation/how-central-european-state-serbia-contributed-to-making-of-uri/uri-indi.jpg"
                            }
                            nickname={`person${index}`}
                            key={key}
                        />
                    );
                })}
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, key) => {
                    return (
                        <RoomInfoBox
                            title={`제목 ${index}`}
                            menu={`메뉴 ${index}`}
                            numOfPeople={index}
                            maxCapacity={index * 2 + 1}
                            key={key}
                        />
                    );
                })}
            </ScrollView>
            <ProfileBox
                like_content={"제육볶음"}
                hate_content={"쟁반짜장"}
                image_uri = {"https://img.etimg.com/thumb/width-640,height-480,imgsize-482493,resizemode-1,msid-68228307/news/politics-and-nation/how-central-european-state-serbia-contributed-to-making-of-uri/uri-indi.jpg"}
                nickname={"이창해"}
             />
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome name="exchange" size={30} color="black" />
                    <Text>채널 변경</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
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
