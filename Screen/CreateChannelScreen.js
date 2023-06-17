import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Title } from 'react-native-paper';

import { chatkitty } from '../components/Chatkittyindex';
import FormButton from './Form/formButton';
import FormInput from './Form/formInput';

//사용자가 가입하고 채팅할 수 있는 새로운 공개 채널을 생성
export default function CreateChannelScreen({ navigation }) {
  const [channelName, setChannelName] = useState('');

  function handleButtonPress() {
    if (channelName.length > 0) {
      chatkitty
          .createChannel({
            type: 'PUBLIC',
            name: channelName
          })
          .then(() => navigation.navigate('Home'));
    }
  }

  return (
      <View style={styles.rootContainer}>
        <View style={styles.closeButtonContainer}>
          <IconButton
              icon='close-circle'
              size={36}
              iconColor='#5b3a70'
              onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.innerContainer}>
          <Title style={styles.title}>Create a new channel</Title>
          <FormInput
              labelName='Channel Name'
              value={channelName}
              onChangeText={(text) => setChannelName(text)}
              clearButtonMode='while-editing'
          />
          <FormButton
              title='Create'
              modeValue='contained'
              labelStyle={styles.buttonLabel}
              onPress={() => handleButtonPress()}
              disabled={channelName.length === 0}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  buttonLabel: {
    fontSize: 22
  }
});