import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from "../Button&Input/CustomInput";
import CustomButton from "../Button&Input/CustomButton";

//새비밀번호 입력 화면
const NewPasswordScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const onSubmitPressed = () => { //완료 버튼 클릭 시 로그인 화면으로 이동
        Alert.alert("알림", "비밀번호 설정이 완료되었습니다.");
        navigation.navigate("LoginScreen")
    }
    const onSignInPress = () => {
        console.warn('onSignInPress')
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>비밀번호 재설정</Text>
            <CustomInput
                placeholder='이름을 입력하세요.'
                value={name}
                setValue={setName}
            />
            <CustomInput
                placeholder='새 비밀번호를 입력하세요.'
                value={newPassword}
                setValue={setNewPassword}
            />
            <CustomButton text="완료" onPress={onSubmitPressed}/>
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

export default NewPasswordScreen