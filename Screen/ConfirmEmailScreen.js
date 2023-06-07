import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet} from 'react-native'
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

//이메일 인증 입력 화면
const ConfirmEmailScreen = () => {
    const [id, setId] = useState('')
    const [code, setCode] = useState('')

    const onConfirmPressed = () => {
        console.warn('onConfirmPressed')
    }
    const onSignInPress = () => {
        console.warn('onSignInPress')
    }
    const onResendPressed = () => {
        console.warn('onResendPress')
    }
    
    return(
        <View style={styles.confirmTextContainer}>
            <Text style={styles.confirmText}>이메일 인증</Text>
            <Text style={styles.confirmTextS}>이메일 인증을 위한 과정입니다.</Text>
            <Text style={styles.confirmTextS}>이메일 주소로 전달된 인증코드를 입력해주세요.</Text>
            <CustomInput
                placeholder='Id'
                value={id}
                setValue={setId}
            />
            <CustomInput
                placeholder='Code'
                value={code}
                setValue={setCode}
            />
            <CustomButton text="Confirm" onPress={onConfirmPressed}/>
            <Pressable onPress={onResendPressed}>
                <Text style={styles.otherButtonText}>인증코드 다시 받기 </Text>
            </Pressable>
            <CustomButton
                text="Resend code"
                onPress={onResendPressed}
                type="SECONDARY"
            />
            <CustomButton
                text="Back to Sign in"
                onPress={onSignInPress}
                type="TERTIARY"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    confirmTextContainer: {
        marginTop: '23%',
        marginLeft: '9%',
        marginBottom: 20
    },
    confirmText: {
        fontSize: 25,
        fontWeight: '600',
        color: '#FFFFFF',
        lineHeight: 29.3,
        marginBottom: 16,
    },
    confirmTextS: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        marginTop: 2,
        color: '#EEEEEE'
    },
    otherButtonText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#EEEEEE',
        alignSelf: 'center'
    }
 });

export default ConfirmEmailScreen