import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
  
    const onSubmit = () => {
      // Perform the submission logic here
    };
  
    return (
      <View style={styles.container}>
        <Text>이름</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
        />
        {errors.name && <Text>이름을 입력해주세요.</Text>}
  
        <Text>전화번호</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
        />
        {errors.phoneNumber && <Text>전화번호를 입력해주세요.</Text>}
  
        <Text>비밀번호</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        {errors.password && <Text>비밀번호를 입력해주세요.</Text>}
  
        <Text>비밀번호 확인</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPasswordConfirm(text)}
          value={passwordConfirm}
        />
        {errors.passwordConfirm && <Text>비밀번호를 확인해주세요.</Text>}
  
        <Button title="회원가입" onPress={handleSubmit(onSubmit)} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      marginBottom: 10,
    },
  });
  
  export default SignUp;
  