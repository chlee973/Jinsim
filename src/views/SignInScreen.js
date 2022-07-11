import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/images/cutlery.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const REST_API_KEY = '7bdb6912e4211d56037b4ddb88b84488'
const REDIRECT_URI = 'http://192.249.18.145/oauth/kakao/logout'

const SignInScreen = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const win = Dimensions.get('window')

    const onSignInPress = () => {

    }
    const onForgotPasswordPressed = () => {

    }
    const onSignInGooglePress = () => {

    }
    const onSignInKakaoPress = () => {
        navigation.navigate('Kakao Sign In', {})
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
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text="Sign In" onPress={onSignInPress}/>
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
            <CustomButton text="Sign In with Google" onPress={onSignInGooglePress} bgColor="#FAE9EA" fgColor="#DD4D44"/>
            <CustomButton text="Sign In with Kakao" onPress={onSignInKakaoPress} bgColor="#FEE500" fgColor="#000000"/>
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