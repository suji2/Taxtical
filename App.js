import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './Screen/Main'
import Chat from './Screen/Chat'
import Info from './Screen/Info'
import Map from './Screen/MapScreen'
import TabBarIcon from './components/TabBarIcon'
import LoginScreen from './Screen/LoginScreen';
import SignScreen from './Screen/SignScreen';
import ForgotPasswordScreen from './Screen/ForgotPasswordScreen';
import NewPasswordScreen from './Screen/NewPasswordScreen';

/*
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer

*/

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const MainTap = () => {
  return (
    <Tab.Navigator
      initialRouteName = "User"
      tabBarOptions = {{
        activeBackgroundColor:'#F5E6FF',
        activeTintColor:'Black',
        style:{
          backgroundColor:"white"
        },
        labelPosition:'beside-icon'
      }}
      screenOptions = {({route}) => ({
        tabBarLabel:route.name,
        tabBarIcon: ({focused}) =>(
          TabBarIcon(focused,route.name)
        )
      })}
    >
      <Tab.Screen name = "채팅" component={Chat}/>
      <Tab.Screen name = "메인" component={Main}/>
      <Tab.Screen name = "정보" component={Info}/>
      <Tab.Screen name = "지도" component={Map}/>
    </Tab.Navigator>
  );
}

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

