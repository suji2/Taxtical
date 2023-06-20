import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet, Alert} from 'react-native'
import { auth } from '../../components/firebase';
import { useNavigation } from '@react-navigation/native';
import CustomInput from "../Button&Input/CustomInput";
import CustomButton from "../Button&Input/CustomButton";

//앱 켰을 때 로그인하는 화면
const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = async () => { //로그인하기 버튼 클릭시 메인화면으로 이동
        /*auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert("알림", "로그인이 완료되었습니다.");
                navigation.navigate("Main");
            })
            .catch(error => {
                Alert.alert("오류", "로그인에 실패했습니다. 다시 시도해주세요.");
                console.log(error);
            });*/
        Alert.alert("알림", "로그인이 완료되었습니다.");
        navigation.navigate("Main")
        /*try {
            const {user} = await signIn(info);
            console.log(user);
          } catch (e) {
            Alert.alert("로그인에 실패하였습니다.");
          }*/
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
                value={email}
                setValue={setEmail}
                placeholder="이메일을 입력하세요"
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="비밀번호를 입력하세요"
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