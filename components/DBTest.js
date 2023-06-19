import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { auth } from "../components/firebase"

const DBTest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setID] = useState("");
  const [users, setUsers] = useState([]);
  const [addName, setAddName] = useState("");
  const [phone, setPhone] = useState("");

  const addtoDB = async () => {
    try {
      await auth.collection("Taxtical").doc().set({
        Email: email,
        Password: password,
        createdAt: new Date(),
        Name: addName,
        Phone: phone,
      });
      alert("Added");
      setEmail("");
      setPassword("");
      setAddName("");
      setPhone("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const readfromDB = async () => {
    try {
      const data = await auth.collection("Taxtical").get();
      let tempArray = [];
      data.forEach((doc) => {
        tempArray.push({ ...doc.data(), id: doc.id });
      });
      setUsers(tempArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateDB = async () => {
    try {
      auth.collection("Taxtical")
        .doc(id)
        .update({
          Email: email,
          Password: password,
          Name: addName,
          Phone: phone,
        })
        .then(() => {
          alert("UPDATED!!");
          readfromDB();
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteDB = async () => {
    auth.collection("Taxtical")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deleted");
        readfromDB();
      });
  };

  return (
    <View>
      <TextInput placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="password" value={password} onChangeText={setPassword} />
      <TextInput placeholder="name" value={addName} onChangeText={setAddName} />
      <TextInput placeholder="phone" value={phone} onChangeText={setPhone} />
      <Button title="Create" onPress={addtoDB} />
      <Button title="Read" onPress={readfromDB} />
      {users.map((row, idx) => (
        <React.Fragment key={idx}>
          <Text> User - {idx}</Text>
          <Text> {row.id} </Text>
          <Text> {row.phone} </Text>
        </React.Fragment>
      ))}
      <Button title="Update" onPress={updateDB} />
      <TextInput placeholder="Doc ID" value={id} onChangeText={setID} />

      <Button title="Delete" onPress={deleteDB} />
      <TextInput placeholder="Delete Doc ID" value={id} onChangeText={setID} />
    </View>
  );
};

export default DBTest;
