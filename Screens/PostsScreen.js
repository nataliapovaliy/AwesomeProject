import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text, FlatList    
} from 'react-native';
import { useFonts } from 'expo-font';

export const PostsScreen = ({ route }) => {
    const [posts, setPosts] = useState([])
    // console.log('route.params', route.params)
    
    const [fontsLoaded] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    }) 

    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params])
        }
    }, [route.params])
    // console.log('posts', posts)

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

                <FlatList
                    data={posts}
                    keyExtractor={(item, indx) => indx.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                        <View style={styles.cardImageWrap}>
                            <Image source={{ uri: item.photo }} style={styles.cardImage} />
                        </View>
                        <View style={styles.cardTextwrap}>
                            <Text style={styles.cardText}>Лic</Text>
                        </View>
                        <View style={styles.cardInner}>
                            <View style={styles.cardWrapper}>
                            <Ionicons
                                name="chatbubble"
                                size={24}
                                color="#FF6C00"
                                onPress={() => navigation.navigate('CommentsScreen')}
                            />
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
                            <Text
                                style={styles.cardLink}
                                onPress={() => navigation.navigate('Map')}
                            >
                                Ukraine
                            </Text>
                            </View>
                        </View>
                        </View>
                    )}
                />
                
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
        fontFamily: 'RobotoMedium',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
    },
    paragrafUser: {
        fontFamily: 'RobotoRegular',
        fontSize: 11,
        lineHeight: 13,
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(33, 33, 33, 0.8)',
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
    }
})