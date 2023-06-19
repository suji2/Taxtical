import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { auth } from "../components/firebase"

const DBTest = () => {
  const [addName, setAddName] = useState("");
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpw, setConfirmpw] = useState("");
  const [phoneNum, setPhoneNum] = useState();

  const addtoDB = async () => {
    try {
      await db.collection("Taxtical").doc().set({
        Name: addName,
        Id: addID,
        createdAt: new Date(),
      });
      alert("Added");
      setAddName("");
      setAddAge("");
    } catch (error) {
      console.log(error.message);
    }
  };
  const readfromDB = async () => {
    try {
      const data = await db.collection("Taxtical");
      let tempArray = [];
      data.get().then((snap) => {
        snap.forEach((doc) => {
          tempArray.push({ ...doc.data(), id: doc.id });
        });
        setUsers(tempArray);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateDB = async () => {
    try {
      db.collection("Taxtical")
        .doc(id)
        .update({
          Name: addName,
          Id: addId,
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
    db.collection("Taxtical")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deleted");
        readfromDB;
      });
  };

  return (
    <View>
      <TextInput placeholder="name" value={addName} onChangeText={setAddName} />
      <TextInput placeholder="id" value={addId} onChangeText={setID} />
      <Button title="Create" onPress={addtoDB} />
      <Button title="Read" onPress={readfromDB} />
      {users?.map((row, idx) => {
        return (
          <>
            <Text> User - {idx}</Text>
            <Text> {row.id} </Text>
            <Text> {row.Name} </Text>
            <Text> {row.Age} </Text>
          </>
        );
      })}
      <Button title="Update" onPress={updateDB} />
      <TextInput placeholder="Doc ID" value={id} onChangeText={setID} />
      <TextInput placeholder="name" value={addName} onChangeText={setAddName} />
      <TextInput placeholder="Age" value={addAge} onChangeText={setAddAge} />

      <Button title="Delete" onPress={deleteDB} />
      <TextInput placeholder="Delete Doc ID" value={id} onChangeText={setID} />
    </View>
  );
};

export default DBTest;