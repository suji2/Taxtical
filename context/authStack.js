import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../Screen/Login/LoginScreen';
import SignScreen from '../Screen/SignUp/SignScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignScreen' component={SignScreen} />
      </Stack.Navigator>
  );
}