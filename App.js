import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet} from "react-native";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import Root from "./Root";

const Stack = createNativeStackNavigator();

export default function App() {
    
    return (
        <Provider store={Store}>
            <Root />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FBFC",
    },
});
