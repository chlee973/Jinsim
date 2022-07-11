import { View, Text, Alert } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { useSelector, useDispatch } from 'react-redux'
import { setNickname, setProfileImage } from '../redux/actions'

const qs = require('qs')
const axios = require('axios')

const REST_API_KEY = '7bdb6912e4211d56037b4ddb88b84488'
const LOGOUT_REDIRECT_URI = 'http://192.249.18.145/oauth/kakao/logout'
// const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoSignOutScreen = ({navigation}) => {
  const {nickname, profile_image} = useSelector(state => state.users)
  const dispatch = useDispatch()

  const getCode = (target) => {
    console.log(target)
    navigation.navigate("Sign In")
    // const exp = 'code=';
    // const condition = target.indexOf(exp);
    // if (condition !== -1) {
    //   const requestCode = target.substring(condition + exp.length);
    //   requestToken(requestCode);
    // }
  };

const requestToken = async (code ) => {
    const requestTokenUrl = 'https://kauth.kakao.com/oauth/token';

    const options = qs.stringify({
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: LOGOUT_REDIRECT_URI,
        code,
    });

    try {
        navigation.navigate("Sign In")
        const tokenResponse = await axios.post(requestTokenUrl, options);
        const ACCESS_TOKEN = tokenResponse.data.access_token;
        console.log(ACCESS_TOKEN)
        // const body = {
        //   ACCESS_TOKEN,
        // };
        // const response = await axios.post(LOGOUT_REDIRECT_URI, body);
        // const value = response.data;
        // if(value.result == "success") {
        //   const {properties} = value.data
        //   dispatch(setNickname(""))
        //   dispatch(setProfileImage(""))
        //   navigation.navigate('')

        // }
        // else {
        //   console.error("error getting access token")
        // }
        // const result = await storeUser(value);
        // if (result === 'stored') {
        // const user = await getData('user');
        // dispatch(read_S(user));
        // }
    } catch (e) {
        console.log(e);
    }
};

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`,
        }}
        // injectedJavaScript={INJECTED_JAVASCRIPT}
        // javaScriptEnabled
        // onLoad={navigation.navigate("Sign In")}
        onMessage={() => navigation.navigate("Sign In")}
      />
    </View>
  )
}

export default KakaoSignOutScreen