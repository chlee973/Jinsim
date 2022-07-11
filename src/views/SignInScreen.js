import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/images/cutlery.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
const REST_API_KEY = "7bdb6912e4211d56037b4ddb88b84488";
const REDIRECT_URI = "http://192.249.18.145/oauth/kakao/logout";

const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const win = Dimensions.get("window");

    const onSignInPress = () => {};
    const onForgotPasswordPressed = () => {};
    const onSignInGooglePress = () => {};
    const onSignInKakaoPress = () => {
        navigation.navigate("카카오 로그인");
    };

    return (
        <View style={styles.root}>
            <View style={styles.logo_container}>
                <Image
                    source={Logo}
                    style={[
                        styles.logo,
                        {
                            width: win.width * 0.8,
                            height: win.height * 0.5,
                            maxWidth: 300,
                            maxHeight: 300,
                        },
                    ]}
                />
            </View>
            <View style={styles.button_container}>
                <CustomButton
                    text="카카오 로그인"
                    onPress={onSignInKakaoPress}
                    bgColor="#FEE500"
                    fgColor="#000000"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    logo_container: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        resizeMode: "contain",
    },
    button_container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
    },
});

export default SignInScreen;
