import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabBarIcon from '../components/TabBarIcon';
import Main from './Main'
import Chat from './Chat'
import Map from './MapScreen'
import User from './User';

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
      <Tab.Screen name = "정보" component={User}/>
    </Tab.Navigator>
  );
}

export default MainTap