import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from "../Button&Input/CustomInput";
import CustomButton from "../Button&Input/CustomButton";

//회원가입 화면
const SignScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordconfirm] = useState('');

    const onSignInPressed = async () => {//Sign Up 버튼 클릭시 로그인화면으로 이동
        Alert.alert("알림", "회원가입이 완료되었습니다.");
        navigation.navigate("LoginScreen")
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>회원가입 </Text>
            <CustomInput
                placeholder='이름을 입력하세요.'
                value={name}
                setValue={setName}
            />
            <CustomInput
                placeholder='이메일을 입력하세요.'
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder='비밀번호를 입력하세요.'
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomInput
                placeholder='다시 한 번 비밀번호를 입력하세요.'
                value={passwordconfirm}
                setValue={setPasswordconfirm}
                secureTextEntry={true}
            />
            <CustomInput
                placeholder='전화번호를 입력하세요.'
                value={phonenumber}
                setValue={setPhonenumber}
            />
            <CustomButton text="Sign Up" onPress={onSignInPressed} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:40,
        backgroundColor:'#9370DB',
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        color: '#FFFFFF',
        lineHeight: 29.3,
        paddingBottom: 10
    },
})

export default SignScreen