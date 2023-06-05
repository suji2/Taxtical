import React, {useState} from "react";
import {View, TextInput, StyleSheet} from 'react-native'

//CustomInput가 TextInput(이름, 비밀번호) 역할 함
const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
	return (
        <View>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}    
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
	backgroundColor: '#FFFFFF',
    width: '83%',
    height: 48,
    paddingLeft: 15,
    borderRadius: 5,
    marginBottom: 18,
    alignSelf: 'center',
    }
})


export default CustomInput
