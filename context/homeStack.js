import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { IconButton } from 'react-native-paper';

import { chatkitty, channelDisplayName } from '../components/Chatkittyindex';

import { NotificationContext } from './notificationProvider';

import BrowseChannelsScreen from '../Screen/BrowseChannelsScreen';
import ChatScreen from '../Screen/ChatScreen';
import CreateChannelScreen from '../Screen/CreateChannelScreen';
import HomeScreen from '../Screen/HomeScreen';

const ChatStack = createStackNavigator();
const ModalStack = createStackNavigator();

export default function HomeStack() {
  const { registerForPushNotifications, sendNotification } = useContext(NotificationContext);

  useEffect(() => {
    registerForPushNotifications();

    chatkitty.onNotificationReceived(async (notification) => {
      await sendNotification({
        title: notification.title,
        body: notification.body
      });
    });
  }, []);

  return (
      <ModalStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
        <ModalStack.Screen name='ChatApp' component={ChatComponent} />
        <ModalStack.Screen name='CreateChannel' component={CreateChannelScreen} />
      </ModalStack.Navigator>
  );
}

function ChatComponent() {
  return (
      <ChatStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#5b3a70'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 22
            }
          }}
      >
        <ChatStack.Screen
            name='Home'
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                  <IconButton
                      icon='plus'
                      size={28}
                      iconColor='#ffffff'
                      onPress={() => navigation.navigate('BrowseChannels')}
                  />
              )
            })}
        />
        <ChatStack.Screen
            name='BrowseChannels'
            component={BrowseChannelsScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                  <IconButton
                      icon='plus'
                      size={28}
                      iconColor='#ffffff'
                      onPress={() => navigation.navigate('CreateChannel')}
                  />
              )
            })}
        />
        <ChatStack.Screen
            name='Chat'
            component={ChatScreen}
            options={({ route }) => ({
              title: channelDisplayName(route.params.channel)
            })}
        />
      </ChatStack.Navigator>
  );
}