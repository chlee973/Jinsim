import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/images/cutlery.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import io from "socket.io-client";

// const socket = io("http://192.249.18.146:443");
const socket = io("http://192.249.18.165:443");


const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const win = Dimensions.get('window')

    const object1 = {
        id: 1,
        name: "hello"
    }

    socket.on("tunnel", (message) => {
        console.log("-------------------receive message----------------");
        console.log(message);
    });

    const onSignInPress = () => {
        console.log("-------------------send message----------------");
        // socket.emit("tunnel", object1);
        socket.emit("msg", object1);
    }
    const onForgotPasswordPressed = () => {

    }
    const onSignInGooglePress = () => {

    }
    const onSignInKakaoPress = () => {

    }

    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, {
                    width: win.width * 0.7,
                    height: win.height * 0.3,
                    maxWidth: 200,
                    maxHeight: 200,
                }]}
            />
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton text="Sign In" onPress={onSignInPress} />
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
            <CustomButton text="Sign In with Google" onPress={onSignInGooglePress} bgColor="#FAE9EA" fgColor="#DD4D44" />
            <CustomButton text="Sign In with Kakao" onPress={onSignInKakaoPress} bgColor="#FEE500" fgColor="#000000" />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        resizeMode: 'contain',
        marginVertical: 10,
    }
})

export default SignInScreen