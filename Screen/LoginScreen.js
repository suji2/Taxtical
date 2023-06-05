import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet} from 'react-native'
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const Separator = () => <View style={styles.separator} />;
//앱 켰을 때 로그인하는 화면
const LoginScreen = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("onSignInPressed")
    }

    const onForgotPasswordPressed = () => {

    }

    const onSignUpPressed = () => {
        
    }
    return(
        <View>
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
                text="로그인하기"
            />
            <Separator />
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
	signInTextContainer: {
        marginTop: '23%',
        marginLeft: '9%'
    },
    signInText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#FFFFFF',
        lineHeight: 29.3,
    },
    signInTextS: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 50,
        color: '#EEEEEE'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
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