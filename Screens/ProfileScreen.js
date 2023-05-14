import React, { useEffect, useState } from 'react'
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
    FlatList,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { collection, onSnapshot } from 'firebase/firestore'
import { db, auth } from '../firebase/config'
import { selectName } from '../redux/auth/authSelectors'
import { useSelector, useDispatch } from 'react-redux'
import Post from '../Components/Post'
import { logout } from '../redux/auth/authOperations'

export const ProfileScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [userPosts, setUserPosts] = useState([])
    const userName = useSelector(selectName)
    
    const [fonts] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    })

    useEffect(() => {
        getUserPosts()
    }, [])

    const getUserPosts = async () => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            const posts = snapshot.docs.map((doc) => ({
                ...doc.data(), id: doc.id,
            }))
        setUserPosts(posts)
        })
    }

    const logOut = () => {
        dispatch(logout())
    }

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
                                name="closecircleo"
                                size={25}
                                color="#E8E8E8"
                                style={styles.closecircleoIcon}
                            />
                        </View>
                        <View style={styles.wrapIonicons}>
                            <Ionicons name="exit-outline" size={24} color="#BDBDBD" onPress={logOut}/>
                        </View>
                                
                        <Text style={styles.title}>{userName}</Text>
                                
                        <FlatList
                            data={userPosts}
                            style={styles.postsList}
                            keyExtractor={(__, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <Post
                                post={item}
                                navigation={navigation}
                                isLastItem={index === userPosts.length - 1}
                                forProfileScreen
                                />
                            )}
                        />
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
        alignItems: 'center',
        justifyContent: 'center',
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
    closecircleoIcon: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: 108,
        top: 80,
        borderRadius: 25,
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
    postsList: {
        marginHorizontal: 8,
        height: '50%',
    },
})
