import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'


export const ProfileScreen = () => {
    const [fonts] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    })

    if (!fonts) {
        return null
    }

    return (
        <View style={styles.container}>
        <ImageBackground
            source={require('../assets/images/imgbg.png')}
            resizeMode="cover"
            style={styles.image}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrap}>
                <View style={styles.wrapImage}>
                <AntDesign
                    name="pluscircleo"
                    size={25}
                    color="#FF6C00"
                    backgroundColor="white"
                    style={styles.buttonAddPhoto}
                />
                </View>
                <View style={styles.wrapIonicons}>
                <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
                </View>
                <Text style={styles.title}>Natali Romanova</Text>
                <View style={styles.card}>
                <View style={styles.cardImageWrap}>
                    <Image
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.cardImage}
                    />
                </View>
                <View style={styles.cardTextwrap}>
                    <Text style={styles.cardText}>Лic</Text>
                </View>
                <View style={styles.cardInner}>
                    <View style={styles.cardWrapper}>
                    <Ionicons name="chatbubble" size={24} color="#FF6C00" />
                    <Text style={styles.cardNumber}>8</Text>
                    </View>
                    <View style={styles.cardWrapper}>
                    <AntDesign name="like2" size={24} color="#FF6C00" />
                    <Text style={styles.cardNumber}>153</Text>
                    </View>
                    <View style={styles.cardWrapperMap}>
                    <SimpleLineIcons
                        name="location-pin"
                        size={24}
                        color="black"
                    />
                    <Text style={styles.cardLink}>Ukraine</Text>
                    </View>
                </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'RobotoRegular',
        paddingBottom: 10,
    },
    image: {
        width: 400,
        height: 812,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    wrapImage: {
        position: 'absolute',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',

        borderRadius: 16,
        top: -60,
        left: 141,
    },
    buttonAddPhoto: {
        position: 'absolute',
        left: 108,
        top: 80,
        borderRadius: 12.5,
    },
    wrapIonicons: {
        position: 'absolute',
        right: 30,
        top: 18,
    },

    title: {
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: 'center',
        fontFamily: 'RobotoMedium',
    },
    wrap: {
        display: 'flex',
        gap: 16,
        backgroundColor: '#fff',
        height: '84%',
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 92,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    card: {
        flex: 1,
    },
    cardImage: {
        width: 343,
        height: 240,
    },
    cardImageWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        marginTop: 8,
        marginStart: 16,
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.01,
        textAlign: 'start',
        fontFamily: 'RobotoMedium',
    },
    cardInner: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginRight: 24,
        marginStart: 16,
        justifyContent: 'flex-start',
    },
    cardWrapperMap: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        marginLeft: 90,
        marginRight: 16,
        marginStart: 16,
    },
    cardNumber: {
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.01,
        fontFamily: 'RobotoMedium',
    },
    cardLink: {
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.01,
        fontFamily: 'RobotoMedium',
    },
})
