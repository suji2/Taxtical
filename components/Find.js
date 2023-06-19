import React, { useState } from 'react';
import { StyleSheet, View, Button, SafeAreaView, Text, TextInput, Picker, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

const Home = (props) => {
  const navigation = useNavigation();
  const [destination, setDestination] = useState('');
  const [arrival, setArrival] = useState('');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');

  const handleDestinationChange = (text) => {
    setDestination(text);
  };

  const handleArrivalChange = (text) => {
    setArrival(text);
  };

  const handleHourChange = (value) => {
    setHours(value);
  };

  const handleMinuteChange = (value) => {
    setMinutes(value);
  };

  const [selectedGenders, setSelectedGenders] = useState([]);

  const handleGenderSelection = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((item) => item !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  const handleButtonPress = () => { // 버튼이 눌렸을 때 실행할 동작들
    console.log('Destination:', destination);
    console.log('Arrival:', arrival);
    console.log('Hours:', hours);
    console.log('Minutes:', minutes);
    console.log('Selected Genders:', selectedGenders);
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
          <Picker
            selectedValue={hours}
            style={styles.picker}
            onValueChange={handleHourChange}
          >
            {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
              <Picker.Item key={hour} label={hour.toString().padStart(2, '0')} value={hour.toString().padStart(2, '0')} />
            ))}
          </Picker>
          <Text style={styles.label}>:</Text>
          <Picker
            selectedValue={minutes}
            style={styles.picker}
            onValueChange={handleMinuteChange}
          >
            {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
              <Picker.Item key={minute} label={minute.toString().padStart(2, '0')} value={minute.toString().padStart(2, '0')} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.genderItem}>
          <CheckBox
            value={selectedGenders.includes('female')}
            onValueChange={() => handleGenderSelection('female')}
            color="black"
          />
          <Text style={[styles.genderText, selectedGenders.includes('female') && styles.checkedGenderText]}>남자</Text>
        </View>
        <View style={styles.genderItem}>
          <CheckBox
            value={selectedGenders.includes('male')}
            onValueChange={() => handleGenderSelection('male')}
            color="black"
          />
          <Text style={[styles.genderText, selectedGenders.includes('male') && styles.checkedGenderText]}>여자</Text>
        </View>
        <View style={styles.genderItem}>
          <CheckBox
            value={selectedGenders.includes('other')}
            onValueChange={() => handleGenderSelection('other')}
            color="black"
          />
          <Text style={[styles.genderText, selectedGenders.includes('other') && styles.checkedGenderText]}>무관</Text>
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
  genderText: {
    marginLeft: 10,
    color: 'black', 
  },
  checkedGenderText: {
    color: 'black', 
  },
});

export default Home;