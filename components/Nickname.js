import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Nickname = () => {
  const navigation = useNavigation();

  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black");

  const handleNicknameChange = () => {
    const isNicknameValid = checkNicknameValidity(nickname);

    if (isNicknameValid) {
      setMessage("변경 완료");
      setMessageColor("black");
      changeNickname(nickname);
    } else {
       setMessage("※변경 불가※");
      setMessageColor("red");
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>닉네임 : </Text>
        <TextInput
          style={styles.input}
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChangeText={setNickname}
        />
      </View>
      <Button title="닉네임 변경" onPress={handleNicknameChange} />
      <Text style={[styles.message, { color: messageColor }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  message: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Nickname;