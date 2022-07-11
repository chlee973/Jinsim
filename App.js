import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import KakaoSignInScreen from "./src/views/KakaoSignInScreen";
import KakaoSignOutScreen from "./src/views/KakaoSignOutScreen";
import SignInScreen from "./src/views/SignInScreen";
import Main from "./src/views/Main";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <Provider store={Store}>
        //   <NavigationContainer styles={styles.container}>
        //     <Stack.Navigator initialRouteName="Main">
        //       <Stack.Screen name="Sign In" component={SignInScreen}/>
        //       <Stack.Screen name="Kakao Sign In" component={KakaoSignInScreen} />
        //       <Stack.Screen name="Kakao Sign Out" component={KakaoSignOutScreen} />
        //       <Stack.Screen name="Main" component={Main} />
        //     </Stack.Navigator>
        //   </NavigationContainer>
        // </Provider>
        <SafeAreaView style={styles.container}>
            <Main />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FBFC",
    },
});
