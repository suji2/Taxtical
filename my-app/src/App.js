import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import Home from './Screen/Home'
import User from './Screen/User'
import jovo from './Screen/jovo'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import TabBarIcon from './components/TabBarIcon'


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
        <Tab.Screen name = "정보" component={jovo}/>

      </Tab.Navigator>

    </NavigationContainer>
  );
}


