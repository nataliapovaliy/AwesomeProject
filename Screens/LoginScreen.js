import React, { useState } from 'react';
import {
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    StyleSheet,
    ImageBackground,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert, 
    Platform
} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {  
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [fontsLoaded] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    })    

    const onLogin = () => {
        console.log('Credentials', `${email} + ${pass}`);
        setEmail('');
        setPass('');
        navigation.navigate("Home")
    }

    if (!fontsLoaded) {
        return null
    }

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}> */}
                    <ImageBackground
                        source={require('../assets/images/imgbg.png')}
                        style={styles.imageBg}>
                    
        
                        <View style={styles.logBg}>
                            <Text style={styles.title}>Авторизація</Text>

                            <View style={styles.logForm}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Адреса електронної пошти'
                                    autoComplete="email"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>

                            <View style={styles.pass}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Пароль'
                                    autoComplete="password"
                                    value={pass}
                                    onChangeText={setPass}
                                />
                                <Text style={styles.textInput}> Показати </Text>
                            </View>

                            <TouchableOpacity style={styles.btn} onPress={onLogin}>
                                <Text style={styles.btnText}>Авторизуватися</Text>
                            </TouchableOpacity>

                            <Text
                                style={styles.txtForSignUp}
                                onPress={() => navigation.navigate("RegistrationScreen")}
                            >Немає аккаунта? Зареєструватися
                            </Text>
                                
                        </View>
                    </ImageBackground>
                {/* </KeyboardAvoidingView>                 */}
            </View>
        // </TouchableWithoutFeedback>
            
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
        height: 489,
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
        // height: 489,
        gap: 16,
    },
    input: {
        height: 50,
        width: 343,
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
    textInput: {
        position: 'absolute',
        right: 32,
        top: 16,
        color: '#1B4371',
        fontSize: 16,
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