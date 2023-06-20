import React, { useState } from 'react';
import { StyleSheet, View, Button, SafeAreaView, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

const Find = (props) => {
  const navigation = useNavigation();
  const [destination, setDestination] = useState('');
  const [arrival, setArrival] = useState('');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [selectedGender, setSelectedGender] = useState('');

  const handleDestinationChange = (text) => {
    setDestination(text);
  };

  const handleArrivalChange = (text) => {
    setArrival(text);
  };

  const handleHourChange = (text) => {
    setHours(text);
  };

  const handleMinuteChange = (text) => {
    setMinutes(text);
  };

  const handleGenderChange = (text) => {
    setSelectedGender(text);
  };

  const handleButtonPress = () => {
    console.log('Destination:', destination);
    console.log('Arrival:', arrival);
    console.log('Hours:', hours);
    console.log('Minutes:', minutes);
    console.log('Selected Gender:', selectedGender);
    <Button
            title="선택완료"
            color="black"
            onPress={() => navigation.navigate('MatchingScreen')}
          />
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder="목적지"
          value={destination}
          onChangeText={handleDestinationChange}
        />
      </View>
      <View style={styles.arrowContainer}>
        <Text style={[styles.arrow, { color: 'black' }]}>⇩</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder="도착지"
          value={arrival}
          onChangeText={handleArrivalChange}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <TextInput
            style={styles.picker}
            value={hours}
            onChangeText={handleHourChange}
            keyboardType="numeric"
            maxLength={2}
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            style={styles.picker}
            value={minutes}
            onChangeText={handleMinuteChange}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.genderItem}>
          <TextInput
            style={styles.genderTextInput}
            placeholder="성별"
            value={selectedGender}
            onChangeText={handleGenderChange}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <Button
            title="선택완료"
            color="black"
            onPress={handleButtonPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 200,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  arrowContainer: {
    paddingHorizontal: 10,
    marginVertical: -10,
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  genderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  genderTextInput: {
    width: 200,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Find;