import React from 'react'
import { useFonts } from 'expo-font'
import {
    StyleSheet,
    View,
    Image,
    Text,    
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

export const CreatPostsScreen = () => {
    const [fontsLoaded] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    }) 

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>  //container background
            <View style={styles.wrapAvatar}>     // main container gap 32
                
                <View style={styles.wrapAvatarBox}>   //container whis foto
                    <View style={styles.wrapAvatarFoto}>
                        <View style={styles.wrapAvatarCamera}>
                            <Entypo name="camera" size={24} color="#BDBDBD" />
                        </View>
                    </View>
                <Text style={styles.paragraf}>Завантажте фото</Text>
                </View>

                <Veiw style={styles.wrapAvatarForm}>  // container FORM for name and location
                    <TextInput
                        style={styles.input}
                        placeholder='Назва...'
                        autoComplete="namefoto"
                        value={namefoto}
                        onChangeText={setNamefoto}
                    />
                    <View style={styles.wrapLocation}>
                        <View style={styles.wrapLocationIcon}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                        </View>
                        <TextInput
                        style={styles.input}
                        placeholder='Локація...'
                        autoComplete="location"
                        value={location}
                        onChangeText={setLocation}
                    />  
                    </View>                                      
                </Veiw>

                <View style={styles.button}>  // container for button
                    <Text style={styles.paragraf}>Опублікувати</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapAvatar: {
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
    },
    wrapAvatarBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    wrapAvatarFoto: {
        width: 343,
        height: 240,
        background: '#F6F6F6',
        border: '1 solid #E8E8E8',
        borderRadius: 8,
        position: 'relativ',
    },
    wrapAvatarCamera: {
        flex: 1,
        position: 'absolute',
        background: '#FFFFFF',
        width: 60,
        height: 60,
        top: -30,
        left: 30,
        borderRadius: '50%',
    },
    paragraf: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    wrapAvatarForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },   
    input: {
        paddingHorizontal: 16,
        width: 343,
        height: 50,
        borderBottom: '1 solid #E8E8E8',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    wrapLocation: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
    },
    button: {
        width: 343,
        height: 51,
        padding: '16 32',
        background: '#F6F6F6',
        borderRadius: 100,
    },
})