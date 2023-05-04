import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, Button } from 'react-native';
import { useFonts } from 'expo-font';

// const initialState = {
//     email: '',
//     password: '',
// };

export default function LoginScreen() {
    
    const [fontsLoaded] = useFonts({
    RobotoMedium: require('../assets/fonts/RobotoMedium.ttf'),
    RobotoRegular: require('../assets/fonts/RobotoRegular.ttf'),
    });

    if (!fontsLoaded) {
        return null
    }

    // const [state, setState] = useState(initialState);
        
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/images/imgbg.png')}
                    style={styles.imageBg}>
                    
                    <View style={styles.logBg}>
                        <Text style={styles.title}>Авторизація</Text>
                        <View style={styles.logForm}>
                            <TextInput
                                style={styles.input}
                                placeholder='Адреса електронної пошти' />
                        </View>
                        <View style={styles.pass}>
                            <TextInput
                                style={styles.input}
                                placeholder='Пароль' />
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Авторизуватися</Text>
                        </View>
                        <Text style={styles.txtForSignUp}>Немає аккаунта? Зареєструватися</Text>
                            
                    </View>

                </ImageBackground>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'RobotoRegular',
    },
    imageBg: {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logBg: {
        paddingHorizontal: 16,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        marginTop: 32,
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,    
    },
    logForm: {
        marginTop: 33,
        gap: 16,
    },
    input: {
        height: 50,
        width: 343,
        // marginHorizontal: 16,
        marginBottom: 16,
        paddingHorizontal: 16,

        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',

        color: '#212121',
        fontSize: 16,
    },
    pass: {
        position: 'relative',
    },
    btn: {
        marginTop: 27,
        backgroundColor: '#FF6C00',
        marginHorizontal: 16,

        padding: 16,
        alignItems: 'center',
        borderRadius: 100,
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 19,
    },
    txtForSignUp: {
        color: '#1B4371',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        marginTop: 16,
    }
})