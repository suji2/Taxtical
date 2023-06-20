import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

const Personal = (props) => {
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(''); 

  const handleSave = () => {
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Date of Birth:', dateOfBirth);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>이름 : </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="이름을 입력하시오."
            placeholderTextColor="gray"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.title}>성별 : </Text>
          <View style={styles.genderContainer}>
            <Button
              title="여자"
              onPress={() => setGender('여자')}
              color={gender === '여자' ? 'pink' : 'gray'}
            />
            <Button
              title="남자"
              onPress={() => setGender('남자')}
              color={gender === '남자' ? 'pink' : 'gray'} 
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.title}>생년월일 : </Text>
          <TextInput
            style={styles.input}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="YYYY.MM.DD"
            placeholderTextColor="gray"
          />
        </View>

        <Button title="수정" onPress={handleSave} />
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 3,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Personal;