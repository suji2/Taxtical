import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Screen/Login/LoginScreen';
import SignScreen from './Screen/SignUp/SignScreen';
import ForgotPasswordScreen from './Screen/Password/ForgotPasswordScreen';
import NewPasswordScreen from './Screen/Password/NewPasswordScreen';
import MainTap from './Screen/MainTap';
import Map from './components/Map';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="SignScreen" component={SignScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTap} options={{ headerShown: false }} /> 
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="CallTaxi" component={Map} />
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
} */
