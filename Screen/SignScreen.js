import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../components/firebase';

import CustomInput from "../Screen/Button&Input/CustomInput";
import CustomButton from "../Screen/Button&Input/CustomButton";

const SignScreen = (props) => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSignInPressed = async () => {
    if (!name || !email || !password || !confirmPassword || !phoneNumber) {
      Alert.alert("알림", "모든 항목을 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("알림", "비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "User"), {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      });
      Alert.alert("알림", "회원가입이 완료되었습니다.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhoneNumber("");
      navigation.navigate("LoginScreen")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입 </Text>
      <CustomInput
        placeholder="이름을 입력하세요."
        value={name}
        setValue={setName}
      />
      <CustomInput
        placeholder="이메일을 입력하세요."
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        placeholder="비밀번호를 입력하세요."
        secureTextEntry value={password}
        setValue={setPassword}
      />
      <CustomInput
        placeholder="다시 한 번 비밀번호를 입력하세요."
        secureTextEntry value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <CustomInput
        placeholder="전화번호를 입력하세요."
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      <CustomButton text="회원가입" onPress={onSignInPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#9370DB",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: 29.3,
    paddingBottom: 10,
  },
});

export default SignScreen;