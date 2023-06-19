import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, Picker, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

const User = (props) => {
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [year, setYear] = useState(''); 
  const [month, setMonth] = useState(''); 
  const [day, setDay] = useState(''); 

  const handleSave = () => {
    const dateOfBirth = `${year}.${month}.${day}`;
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Date of Birth:', dateOfBirth);
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1950; year <= currentYear; year++) {
      years.push(year.toString());
    }
    return years;
  };

  const generateMonths = () => {
    const months = [];
    for (let month = 1; month <= 12; month++) {
      months.push(month.toString());
    }
    return months;
  };

  const generateDays = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      days.push(day.toString());
    }
    return days;
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
          <View style={styles.dateContainer}>
            <Picker
              style={styles.picker}
              selectedValue={year}
              onValueChange={(itemValue) => setYear(itemValue)}
            >
              <Picker.Item label="년" value="" />
              {generateYears().map((year) => (
                <Picker.Item key={year} label={year} value={year} />
              ))}
            </Picker>
            <Text style={styles.label}>년</Text>
            <Picker
              style={styles.picker}
              selectedValue={month}
              onValueChange={(itemValue) => setMonth(itemValue)}
            >
              <Picker.Item label="월" value="" />
              {generateMonths().map((month) => (
                <Picker.Item key={month} label={month} value={month} />
              ))}
            </Picker>
            <Text style={styles.label}>월</Text> 
            <Picker
              style={styles.picker}
              selectedValue={day}
              onValueChange={(itemValue) => setDay(itemValue)}
            >
              <Picker.Item label="일" value="" />
              {generateDays().map((day) => (
                <Picker.Item key={day} label={day} value={day} />
              ))}
            </Picker>
            <Text style={styles.label}>일</Text> 
          </View>
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
  dateContainer: {
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default User;