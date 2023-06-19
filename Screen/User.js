import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

const User = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={[styles.button, styles.buttonBorder]}>
          <Button
            title="인적 사항 변경"
            onPress={() => navigation.navigate('Personal')}
            color="pink"
          />
        </View>
        <Text style={styles.title}> </Text>
        <View style={[styles.button, styles.buttonBorder]}>
          <Button
            title="닉네임 변경"
            onPress={() => navigation.navigate('Nickname')}
            color="pink" 
          />
        </View>
        <Text style={styles.title}> </Text>
        <View style={[styles.button, styles.buttonBorder]}>
          <Button
            title="채팅 기록"
            onPress={() => navigation.navigate('Chathistory')}
            color="pink" 
          />
        </View>
        <Text style={styles.title}> </Text>
        <View style={[styles.button, styles.buttonBorder]}>
          <Button
            title="앱 평가하기"
            onPress={() => navigation.navigate('evaluation')}
            color="pink"
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}> </Text>
        <View style={styles.fixToText}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 3,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 5,
    height: 40,
    width: 140,
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default User;