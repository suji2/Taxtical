import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './Screen/LoginScreen';
import SignScreen from './Screen/SignScreen';
import ForgotPasswordScreen from './Screen/ForgotPasswordScreen';
import NewPasswordScreen from './Screen/NewPasswordScreen';

/*
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer
*/

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="SignScreen" component={SignScreen} />
        <Stack.Screen name="Main" component={MainTap} options={{ headerShown: false }} /> 
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
// TEST입니다 TEST에요~~
import { View } from "react-native";
import DBTest from "./components/DBTest"

export default function App() {
  return (
    <>
      <View>
        <DBTest />
      </View>
    </>
  );
}
*/