import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { selectName, selectUserId } from '../redux/auth/authSelectors'

export default function PostComponent({ post, isLastItem, forProfileScreen }) {
    const navigation = useNavigation()
    const userId = useSelector(selectUserId)
    const userName = useSelector(selectName)

    const addPostLike = async () => {
        const docRef = doc(db, 'posts', post.id)
        const docSnap = await getDoc(docRef)
        const docData = docSnap.data()

    const allLikes = docData.likes.find((item) => item.userId === userId)
        if (allLikes) {
        const updatedLikes = docData.likes.filter(
            (item) => item.userId !== userId,
        )
        await updateDoc(docRef, {
            likes: updatedLikes,
        })
        } else {
        await updateDoc(docRef, {
            likes: [...docData.likes, { userId, userName }],
        })
        }
    }

    const containerPosts = isLastItem
        ? styles.postComponentLastItemContainer
        : styles.postComponentItemContainer

    const containerProfile = isLastItem
        ? styles.postComponentLastItemContainerProfile
        : styles.postComponentItemContainer

    const deletePost = async () => {
        const docRef = doc(db, 'posts', post.id)
        await deleteDoc(docRef)
    }

    return (
        <View style={forProfileScreen ? containerProfile : containerPosts}>
            <Image style={styles.postComponentImage} source={{ uri: post.photo }} />
            <Text style={styles.postComponenLocation}>{post.name}</Text>

            <View style={styles.postComponentLocatioIconsWrapper}>
                <View style={styles.postComponentLocatioIconsWrap}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.postComponentInner}
                        onPress={() => navigation.navigate('Comments', post)}
                    >
                        <Feather
                        style={styles.postComponentFlippedIcon}
                        name="message-circle"
                        size={24}
                        color="#BDBDBD"
                        />
                    <Text style={styles.postComponentComment}>{post.comments}</Text>
                    </TouchableOpacity>

                    {!forProfileScreen && (
                        <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.postComponentInner}
                        onPress={deletePost}
                        ></TouchableOpacity>
                    )}

                    {forProfileScreen && (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.postComponentInner}
                        >
                        <AntDesign
                            name="like2"
                            size={24}
                            color="#FF6C00"
                            onPress={addPostLike}
                        />
                        <Text style={styles.postComponentComment}>
                            {post.likes.length}
                        </Text>
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity activeOpacity={0.8}
                    style={styles.postComponentInner}
                    onPress={() => navigation.navigate('Map', post.coordinate)}>
                    
                    <EvilIcons name="location" size={24} color="#BDBDBD" />
                    <Text style={styles.postComponenLocationText}>{post.location}</Text>
                </TouchableOpacity>                    
                        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postComponentItemContainer: {
        marginBottom: 0,
    },

    postComponentLastItemContainer: {
        marginBottom: 100,
    },
    postComponentLastItemContainerProfile: {
        marginBottom: 25,
    },
    postComponentImage: {
        width: '100%',
        height: 240,
        borderRadius: 8,
        marginBottom: 8,
        alignSelf: 'center',
    },
    postComponenLocation: {
        marginBottom: 11,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'RobotoMedium',
    },

    postComponentLocatioIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    postComponentLocatioIconsWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    postComponentFlippedIcon: {
        transform: [{ scaleX: -1 }],
    },

    postComponentComment: {
        marginLeft: 9,
        marginRight: 24,
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
        fontFamily: 'RobotoRegular',
    },
    postComponentInner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 35,
    },

    postComponenLocationText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        textDecorationLine: 'underline',
        fontFamily: 'RobotoRegular',
    },
})