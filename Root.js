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

const Stack = createNativeStackNavigator();
const Root = () => {
    const { is_signed_in } = useSelector((state) => state.signIn);
    return (
        <>
            {is_signed_in ? (
                <NavigationContainer styles={styles.container}>
                    <Stack.Navigator initialRouteName="메인">
                        <Stack.Screen name="메인" component={Main} />
                        <Stack.Screen
                            name="방 생성"
                            component={CreateRoomScreen}
                        />
                        <Stack.Screen name="방" component={RoomScreen} />
                        <Stack.Screen
                            name="로그아웃"
                            component={KakaoSignOutScreen}
                        />
                        <Stack.Screen name="프로필" component={ProfileScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            ) : (
                <NavigationContainer styles={styles.container}>
                    <Stack.Navigator initialRouteName="로그인">
                        <Stack.Screen name="로그인" component={SignInScreen} />
                        <Stack.Screen
                            name="카카오 로그인"
                            component={KakaoSignInScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </>
    );
};

export default Root;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FBFC",
    },
});
