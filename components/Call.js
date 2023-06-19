import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarIcon from './TabBarIcon';
import Chat from '../Screen/Chat'
import Main from '../Screen/Main';
import User from '../Screen/User';
import Find from './Find';
import Personal from './Personal';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const Call = () => {
    return(
        <>
        </>
    )
}

export default Call