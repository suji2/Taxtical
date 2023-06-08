import React, {useState} from "react";
import {View, TextInput, StyleSheet} from 'react-native'

//CustomInput가 TextInput(이름, 비밀번호) 역할 함
const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
	return (
        <View style={styles.container}>
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
    container:{
        backgroundColor:'white',
        width:'100%',
        borderColor: '#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        marginVertical:10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 48,
        paddingLeft: 15,
        borderRadius: 5,
        alignSelf: 'center',
    }
})


export default CustomInput
