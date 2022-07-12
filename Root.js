import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import KakaoSignInScreen from "./src/views/KakaoSignInScreen";
import KakaoSignOutScreen from "./src/views/KakaoSignOutScreen";
import SignInScreen from "./src/views/SignInScreen";
import Main from "./src/views/Main";
import { useSelector, useDispatch } from "react-redux";
import RoomScreen from "./src/views/RoomScreen";
import ProfileScreen from "./src/views/ProfileScreen";
import BanVoteScreen from "./src/views/BanVoteScreen";
import CreateRoomScreen from "./src/views/CreateRoomScreen";
import ChangeChannelScreen from "./src/views/ChangeChannelScreen";

const Stack_Sign_In = createNativeStackNavigator();
const Stack_Main = createNativeStackNavigator();
const Stack_Room = createNativeStackNavigator();
const Root = () => {
    const { is_signed_in, current_channel, current_room } = useSelector(
        (state) => state.users
    );
    if (!is_signed_in) {
        return (
            <NavigationContainer styles={styles.container}>
                <Stack_Sign_In.Navigator initialRouteName="로그인">
                    <Stack_Sign_In.Screen name="로그인" component={SignInScreen} />
                    <Stack_Sign_In.Screen
                        name="카카오 로그인"
                        component={KakaoSignInScreen}
                    />
                </Stack_Sign_In.Navigator>
            </NavigationContainer>
        );
    }
    else if (current_room == null) {
        console.log(`cy and ${current_channel}`)
        return (
            <NavigationContainer styles={styles.container}>
                <Stack_Main.Navigator initialRouteName="메인">
                    <Stack_Main.Screen
                        name="메인"
                        component={Main}
                    />
                    <Stack_Main.Screen
                        name="채널 선택"
                        component={ChangeChannelScreen}
                    />
                    <Stack_Main.Screen name="방 생성" component={CreateRoomScreen} />
                    <Stack_Main.Screen
                        name="로그아웃"
                        component={KakaoSignOutScreen}
                    />
                    <Stack_Main.Screen name="프로필" component={ProfileScreen} />
                </Stack_Main.Navigator>
            </NavigationContainer>
        );
    }
    else {
        return (
            <NavigationContainer styles={styles.container}>
                <Stack_Room.Navigator initialRouteName="방">
                    <Stack_Room.Screen
                        name="방"
                        component={RoomScreen}
                    />
                </Stack_Room.Navigator>
            </NavigationContainer>
        );
    }
};
export default Root;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FBFC",
    },
});
