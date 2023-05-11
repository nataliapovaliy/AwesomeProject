import React, { useState, useEffect, useRef } from 'react';
import { useFonts } from 'expo-font';
import {
    StyleSheet,
    View,
    Text, TextInput, 
    // TouchableWithoutFeedback,
    // Dimensions,
    // Platform,
    TouchableOpacity,
    Image,
    // ImageBackground,
    // KeyboardAvoidingView,
    Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons, Feather, EvilIcons} from '@expo/vector-icons';
// import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Location from 'expo-location'
// import { Camera, CameraType } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
// import * as Location from 'expo-location';
import { CameraComponent } from './Camera';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase/config';
import { selectName, selectUserId } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const initialState = {
    name: '',
    location: '',
    photo: null,
    coordinate: null,
};

export const CreatPostsScreen = () => {
    const [cameraRef, setCameraRef] = useState(null);
    const [state, setState] = useState(initialState);
    // const [isFocused, setIsFocused] = useState(initialFocus);
    // const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectName);
    
    const [fontsLoaded] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    }) 

    const takePhoto = async () => {
        const photo = await cameraRef.takePictureAsync();
        const location = await Location.getCurrentPositionAsync({});
        const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
    };
        setState(prevState => ({ ...prevState, photo: photo.uri, coordinate: coords }));
        await MediaLibrary.createAssetAsync(photo.uri)
    }

    const openCamera = async () => {
        setState(prevState => ({ ...prevState, photo: null}));
        setCameraRef(cameraRef);
        setIsKeyboardShown(false);
    };

    const uploadPhoto = async () => {
        try {
            const response = await fetch(state.photo); 
            const file = await response.blob();
            const uniquePostId = Date.now().toString();

            const linkToFile = ref(storage, `imgPost/${uniquePostId}`);
            await uploadBytes(linkToFile, file);
            const photoUrl = await getDownloadURL(ref(storage, `imgPost/${uniquePostId}`)); 
            const uploadedInfo = {
                displayName: userName,
                photo: photoUrl,
                name: state.name,
                location: state.location,
                coordinate: state.coordinate,
                userId,
                likes: [],
                comments: 0,
            };

            await addDoc(collection(db, 'posts'), uploadedInfo); 
            Keyboard.dismiss();
            setState(initialState);
            setIsKeyboardShown(false);
            navigation.navigate('Posts');
        } catch (error) {
            console.log(error);
        }
    }

    if (!fontsLoaded) {
        return null
    }

    return (
        // <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss();  setIsKeyboardShown(false)}}>
            <View style={styles.container}>  
            <View style={styles.wrapAvatar}>     
                    {state.photo ? (
                        <View style={styles.wrapAvatarBox}>
                            <Image source={{ uri: state.photo }} style={styles.photo} />
                            <TouchableOpacity style={styles.wrapAvatarCamera} onPress={openCamera}>
                                <Feather name="camera" size={20} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    ): (
                        <View style={styles.wrapAvatarFoto}>
                            <CameraComponent makePhoto={takePhoto} location={state.location} photo={state.photo} setCameraRef={setCameraRef} />
                        </View>
                )}
                
                <Text style={styles.paragraf}>Завантажте фото</Text>

                <View style={styles.wrapAvatarForm}>  
                    <TextInput
                        style={styles.input}
                        placeholder='Назва...'
                        autoComplete="namefoto"
                        value={state.name}
                        onChangeText={value => setState(prevState => ({ ...prevState, name: value }))}
                    />

                    <View style={styles.wrapLocation}>
                        <View style={styles.wrapLocationIcon}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                        </View>
                        <TextInput
                        style={styles.input}
                        placeholder='Локація...'                            
                        autoComplete="location"
                        value={state.location}
                        onChangeText={value => setState(prevState => ({ ...prevState, location: value }))}
                    />  
                    </View>                                      
                </View>

                <TouchableOpacity style={styles.button} onPress={uploadPhoto}>  
                    <Text style={styles.paragraf}>Опублікувати</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </TouchableWithoutFeedback>
        
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