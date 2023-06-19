import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarIcon from '../components/TabBarIcon';
import Chat from './Chat'
import Main from './Main';
import User from './User';
import Find from '../components/Find';
import Call from '../components/Call';
import Personal from '../components/Personal';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const FindStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Taxtical🚕"
      component={Main}
      options={{
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen name="Find" component={Find} />
    <Stack.Screen name="Call" component={Call} />
  </Stack.Navigator>
);

const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Taxtical🚕"
      component={User}
      options={{
        headerTitleAlign: 'center', // Align the header title to the center
      }}
    />
    <Stack.Screen name="Personal" component={Personal} />
  </Stack.Navigator>
);

const MainTap = () => {
  return (
    <Tab.Navigator
      tabBarOptions = {{
        activeBackgroundColor:'#F0F8FF',
        activeTintColor:'Black',
        style:{
          backgroundColor:"white"
        },
        labelPosition:'beside-icon',
        tabStyle: {
          flex: 1,
        },
        indicatorStyle: {
          backgroundColor: 'black',
          height: '100%',
        },
      }}
      screenOptions = {({route}) => ({
        tabBarLabel:route.name,
        tabBarIcon: ({focused}) =>(
          TabBarIcon(focused,route.name)
          )
        })}
    >
      <Tab.Screen name = "채팅" component={Chat}/>
      <Tab.Screen name = "메인" component={FindStack}/>
      <Tab.Screen name = "정보" component={UserStack}/>
    </Tab.Navigator>
  );
}

export default MainTap