import React, {useState} from "react";
import {Pressable, Text, View, StyleSheet} from 'react-native'

//CustomButton가 Button(로그인하기) 역할 함
const CustomButton = ({ onPress, text }) => {
	return (
        <View>
            <Pressable
                onPress={onPress}
                style={styles.container}
            >
                <Text style={styles.text}>
                    {text}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        height: 45,
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#E5EBFF',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#545454',
        fontWeight: '700',
        fontSize: 15
    },
})

export default CustomButton