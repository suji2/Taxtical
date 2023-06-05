import * as React from 'react';
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

/*
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer

*/

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen/>
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
        <Tab.Screen name = "채팅" component={Chat}/>
        <Tab.Screen name = "메인" component={Main}/>
        <Tab.Screen name = "정보" component={Info}/>
        <Tab.Screen name = "지도" component={Map}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}



