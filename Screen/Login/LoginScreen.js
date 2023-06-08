import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from "../Button&Input/CustomInput";
import CustomButton from "../Button&Input/CustomButton";

//앱 켰을 때 로그인하는 화면
const LoginScreen = () => {
    const navigation = useNavigation();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => { //로그인하기 버튼 클릭시 메인화면으로 이동
        Alert.alert("알림", "로그인이 완료되었습니다.");
        navigation.navigate("Main")
    }

    const onForgotPasswordPressed = () => { //비밀번호 찾기 글씨 클릭시 찾기 화면으로 이동
        navigation.navigate("ForgotPasswordScreen");
    }

    const onSignUpPressed = () => { //회원가입 글씨 클릭시 회원가입으로 이동
        navigation.navigate("SignScreen");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.signInText}>안녕하세요,</Text>
            <Text style={styles.signInText}>Taxical 입니다.</Text>
            <Text style={styles.signInTextS}>서비스 이용을 위해 로그인 해주세요.</Text>
            <CustomInput
                value={id}
                setValue={setId}
                placeholder="Id"
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                secureTextEntry={true} //비밀번호 입력시 화면에 뜨지 않음
            />
            <CustomButton
                onPress={onSignInPressed}
                text="Sign In"
            />
            <View style={styles.otherButtonContainer}>
                <Pressable onPress={onForgotPasswordPressed}>
                    <Text style={styles.otherButtonText}>비밀번호 찾기  </Text>
                </Pressable>
                <Text style={styles.otherButtonText}>|</Text>
                <Pressable onPress={onSignUpPressed}>
                    <Text style={styles.otherButtonText}>  회원가입하기</Text>
                </Pressable>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
	container: {
        flex:1,
        marginTop: '23%',
        padding:40,
        backgroundColor:'#9370DB',
    },
    signInText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#FFFFFF',
        lineHeight: 30,
    },
    signInTextS: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 50,
    },
    otherButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    otherButtonText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#EEEEEE'
    }
 })

export default LoginScreen