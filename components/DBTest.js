import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { auth } from '../components/firebase';

const DBTest = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const createUser = async () => {
    try {
      const docRef = await addDoc(collection(auth, "User"), {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      });
      alert("User created!");
      setName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}> Sign Up </Text>
        <View style={styles.bodyContainer}>
          <TextInput style={styles.textInput} placeholder="Name" value={name} onChangeText={setName} />
          <TextInput style={styles.textInput} placeholder="Email" value={email} onChangeText={setEmail} />
          <TextInput style={styles.textInput} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
          <TextInput style={styles.textInput} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
          <TouchableOpacity style={styles.button} onPress={createUser}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAD0',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: "Arial",
  },
  bodyContainer: {
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 30,
    minWidth: "100%",
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  button:{
    marginTop: 5,
    padding: 5,
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgreen',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default DBTest;