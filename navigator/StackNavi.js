import { createStackNavigator } from "@react-navigation/stack";

import Chat from '../Screen/Chat'
import MainTap from "../Screen/MainTap";
import User from "../Screen/User";
import LoginScreen from "../Screen/LoginScreen";
import SignScreen from "../Screen/SignScreen";
// import NewPasswordScreen from "../Screen/Password/NewPasswordScreen";
import ForgotPasswordScreen from "../Screen/Password/ForgotPasswordScreen";
import Map from "../components/Map"
import Find from '../components/Find'
import Nickname from "../components/Nickname";
import Main from '../Screen/Main'
const Stack = createStackNavigator();

const StackNavi = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name="Nickname"
                component={Nickname}
                options={{
                    title: "Nickname",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: "Main",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{
                    title: "Chat",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
            <Stack.Screen
                name="Find"
                component={Find}
                options={{
                    title: "Find",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
            <Stack.Screen
                name="Main"
                component={MainTap}
                options={{
                    title: "Main",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
            <Stack.Screen
                name="User"
                component={User}
                options={{
                    title: "User",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: "LoginScreen",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
            <Stack.Screen
                name="SignScreen"
                component={SignScreen}
                options={{
                    title: "SignScreen",
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />

            <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{
                    title: 'ForgotPasswordScreen',
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },

                }}
            />
            {/* <Stack.Screen
                name="NewPasswordScreen"
                component={NewPasswordScreen}
                options={{
                    title: 'NewPasswordScreen',
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            /> */}
            <Stack.Screen
                name="CallTaxi"
                component={Map}
                options={{
                    title: 'Map',
                    headerShown: true,
                    headerStyle: { backgroundColor: "#9acd32" },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "white",
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavi;