import { View, Text, Alert } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useSelector, useDispatch } from "react-redux";
import {setProfileImage, setNickname, setIsSignedIn} from "../redux/actions";

const qs = require("qs");
const axios = require("axios");

const REST_API_KEY = "7bdb6912e4211d56037b4ddb88b84488";
const LOGOUT_REDIRECT_URI = "http://192.249.18.145:443/oauth/kakao/logout";

const KakaoSignOutScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const onSignOut = () => {
      dispatch(setIsSignedIn(false))
      dispatch(setProfileImage(""))
      dispatch(setNickname(""))
    }
    return (
        <View style={{ flex: 1 }}>
            <WebView
                style={{ flex: 1 }}
                source={{
                    uri: `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`,
                }}
                onMessage={onSignOut}
            />
        </View>
    );
};

export default KakaoSignOutScreen;
