import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "./Button&Input/CustomInput";
import CustomButton from "./Button&Input/CustomButton";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");

  const navigation = useNavigation();

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  }

  const onSignUpPressed = () => {
    navigation.navigate("SignScreen");
  }

  const login = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "User"));
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const user = users.find((u) => u.email === email && u.pw === pw);

      if (user) {
        alert("로그인 성공");
        setEmail("");
        setPW("");
        navigation.navigate("Main");
      } else {
        alert("ID 또는 비밀번호가 잘못되었습니다.");
        setEmail("");
        setPW("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>안녕하세요,</Text>
      <Text style={styles.signInText}>Taxical 입니다.</Text>
      <Text style={styles.signInTextS}>서비스 이용을 위해 로그인 해주세요.</Text>
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder="이메일을 입력하세요"
      />
      <CustomInput
        secureTextEntry value={pw}
        setValue={setPW}
        placeholder="비밀번호를 입력하세요"
      />
      <CustomButton
        onPress={login}
        text="Sign In"
      />
      <View style={styles.otherButtonContainer}>
        <Pressable onPress={onForgotPasswordPressed}>
          <Text style={styles.otherButtonText}>비밀번호 찾기 </Text>
        </Pressable>
        <Text style={styles.otherButtonText}> | </Text>
        <Pressable onPress={onSignUpPressed}>
          <Text style={styles.otherButtonText}> 회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '23%',
    padding: 40,
    backgroundColor: '#9370DB',
  },
  signInText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 30,
  },
  signInTextS: {
    fontSize: 12,
    fontWeight: '300',
    color: '#FFFFFF',
    marginTop: 5,
    marginBottom: 50,
  },
  otherButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  otherButtonText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#EEEEEE'
  }
});


export default LoginScreen;