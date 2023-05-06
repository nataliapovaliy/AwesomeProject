import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,    
} from 'react-native';
import { useFonts } from 'expo-font';

export const PostsScreen = () => {
    const [fontsLoaded] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    }) 

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapUser}>
                <Image style={styles.avatarUser} source={require('../assets/images/avatarUser.png')} />
                <View style={styles.wrapUserData}>
                    <Text style={styles.titleUser}>Natali Romanova</Text>
                    <Text style={styles.paragrafUser}>email@example.com</Text>
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
    wrapUser: {
        marginLeft: 16,
        marginTop: 32,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    avatarUser: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    wrapUserData: {
        flex: 1,
        justifyContent: 'center',
    },
    titleUser: {
        fontFamily: 'Roboto-Medium',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
    },
    paragrafUser: {
        fontFamily: 'Roboto-Regular',
        fontSize: 11,
        lineHeight: 13,
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(33, 33, 33, 0.8)',
    }
})