import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screen/Home'
import User from './Screen/User'
import Info from './Screen/Info'
import TabBarIcon from './components/TabBarIcon'

/*
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer

*/

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName = "User"
        tabBarOptions = {{
          activeBackgroundColor:'#F5E6FF',
          activeTintColor:'Black',
          //inactiveBackgroundColor:'yellow', //선택되지 않은 버튼
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
        <Tab.Screen name = "채팅" component={Home}/>
        <Tab.Screen name = "메인" component={User}/>
        <Tab.Screen name = "정보" component={Info}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}



