import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from "../Button&Input/CustomInput";
import CustomButton from "../Button&Input/CustomButton";

//비밀번호 찾기 화면
const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('')

    const onSendPressed = () => { //Send 버튼 클릭시 비밀번호 재설정 화면으로 이동
        navigation.navigate("NewPasswordScreen")
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>비밀번호 찾기</Text>
            <CustomInput
                placeholder='이메일를 입력하세요.'
                value={email}
                setValue={setEmail}
            />
            <CustomButton text="찾기" onPress={onSendPressed}/>
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

export default ForgotPasswordScreen