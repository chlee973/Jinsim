import { View, Text, Alert } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useSelector, useDispatch } from "react-redux";
import socket from "../../socket";
import {
    setUserId,
    setNickname,
    setProfileImage,
    setIsSignedIn,
    setLove,
    setHate,
    setChannel,
    setRoom,
} from "../redux/actions";

const qs = require("qs");
const axios = require("axios");

const REST_API_KEY = "7bdb6912e4211d56037b4ddb88b84488";
const REDIRECT_URI = "http://192.249.18.145:443/oauth/kakao/login";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoSignInScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const getCode = (target) => {
        console.log(target);
        const exp = "code=";
        const condition = target.indexOf(exp);
        if (condition !== -1) {
            const requestCode = target.substring(condition + exp.length);
            requestToken(requestCode);
        }
    };

    const requestToken = async (code) => {
        const requestTokenUrl = "https://kauth.kakao.com/oauth/token";

        const options = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code,
        });

        try {
            const tokenResponse = await axios.post(requestTokenUrl, options);
            const ACCESS_TOKEN = tokenResponse.data.access_token;

            const body = {
                ACCESS_TOKEN,
            };
            const response = await axios.post(REDIRECT_URI, body);
            const value = response.data;
            if (value.result == "success") {
                const user_info = value.user_info;
                const { properties, id } = value.data;
                console.log(user_info);
                dispatch(setUserId(id));
                dispatch(setNickname(properties.nickname));
                dispatch(setProfileImage(properties.profile_image));
                dispatch(setLove(user_info.love));
                dispatch(setHate(user_info.hate));
                dispatch(setChannel(user_info.channel_id))
                dispatch(setRoom(user_info.room_id))
                dispatch(setIsSignedIn(true));
            } else {
                console.error("error getting access token");
            }
        } catch (e) {
            navigation.navigate("?????????");
            console.error(e)
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <WebView
                style={{ flex: 1 }}
                source={{
                    uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
                }}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                javaScriptEnabled
                onMessage={(event) => {
                    const data = event.nativeEvent.url;
                    getCode(data);
                }}
            />
        </View>
    );
};

export default KakaoSignInScreen;
