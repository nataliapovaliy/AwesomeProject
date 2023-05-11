import React, { useState, useEffect, useRef } from 'react';
import { useFonts } from 'expo-font';
import {
    StyleSheet,
    View,
    Text, TextInput,  
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Location from 'expo-location'

const initialState = {
    name: '',
    place: '',
}

export const CreatPostsScreen = () => {
    const [camera, setCamera] = useState (null)
    const [photo, setPhoto] = useState(null)
    const [state, setState] = useState(initialState)
    
    const [fontsLoaded] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    }) 

    const takePhoto = async () => {
    const photo = await camera.takePictureAsync()
    const location = await Location.getCurrentPositionAsync()
    console.log('latitude', location.coords.latitude)
    console.log('longitude', location.coords.longitude)
    setPhoto(photo.uri)
    console.log('photo', photo)
    }

    const sendPhoto = () => {
    console.log('navigation', navigation)
    navigation.navigate('DefaultScreen', {
        photo,
        location,
        state,
    })
    setState(initialState)
    setPhoto('')
    }

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>  
            <View style={styles.wrapAvatar}>     
                
                <View style={styles.wrapAvatarBox}>   
                    {/* <Camera style={styles.camera} ref={setCamera}>
                        {photo ? (
                            <View style={styles.wrapAvatarFoto}>
                                <Image source={{ uri: photo }} style={styles.wrapAvatarCamera}>
                                <Entypo name="camera" size={24} color="#BDBDBD" />
                                </Image>
                            </View>
                        ) : null}
                        <TouchableOpacity style={styles.wrapAvatarCamera} onPress={takePhoto}>
                            <Entypo name="camera" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                    </Camera> */}

                    {/* <View style={styles.wrapAvatarFoto}>
                        <View style={styles.wrapAvatarCamera}>
                            <Entypo name="camera" size={24} color="#BDBDBD" />
                        </View>
                    </View> */}

                <Text style={styles.paragraf}>Завантажте фото</Text>
                </View>

                <View style={styles.wrapAvatarForm}>  
                    <TextInput
                        style={styles.input}
                        placeholder='Назва...'
                        autoComplete="namefoto"
                        value={state.name}
                        onChangeText={(value) =>
                            setState((prevState) => ({ ...prevState, name: value }))
                        }
                    />

                    <View style={styles.wrapLocation}>
                        <View style={styles.wrapLocationIcon}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                        </View>
                        <TextInput
                        style={styles.input}
                        placeholder='Локація...'                            
                        autoComplete="location"
                        value={state.place}
                        onChangeText={(value) =>
                            setState((prevState) => ({ ...prevState, place: value }))
                        }
                    />  
                    </View>                                      
                </View>

                <TouchableOpacity style={styles.button}>  
                    <Text style={styles.paragraf} onPress={sendPhoto}>Опублікувати</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapAvatar: {
        width: 343,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        marginHorizontal: 16,
    },
    wrapAvatarBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        // justifyContent: 'center',
    },
    camera: {
        height: 240,
        alignItems: 'center',
        position: 'relativ',
    },
    wrapAvatarFoto: {
        width: 343,
        height: 240,
        backgroundColor: '#F6F6F6',
        border: '1 solid #E8E8E8',
        borderRadius: 8,
        position: 'relativ',
    },
    wrapAvatarCamera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        width: 60,
        height: 60,
        top: 90,
        left: 142,
        borderRadius: '50%',
    },
    paragraf: {
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
        textAlign: 'start',
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
        // borderBottom: '1 solid #E8E8E8',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    wrapLocation: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        width: 343,
        height: 51,
        paddingHorizontal: 16,
        paddingVertical: 32,
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})