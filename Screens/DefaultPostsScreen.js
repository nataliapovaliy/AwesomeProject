import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'

import {
    collection,
    query,
    where,
    onSnapshot,
    updateProfile,
} from 'firebase/firestore'
import { db, auth } from '../firebase/config'
import {
    selectName,
    selectUserId,
    selectPhoto,
    selectEmail,
} from '../redux/auth/authSelectors'
import { useSelector, useDispatch } from 'react-redux'
import Post from '../Components/Post'

export const DefaultPostsScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([])
    const userId = useSelector(selectUserId)
    const userName = useSelector(selectName)
    const userEmail = useSelector(selectEmail)
    const userPhoto = useSelector(selectPhoto)

    useEffect(() => {
        const postsCollection = query(
        collection(db, 'posts'),
        where('userId', '==', userId),
        )
        onSnapshot(postsCollection, (querySnapshot) => {
        const postsArray = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        setPosts(postsArray)
        })
    }, [])

    const renderPostItem = ({ item, index }) => {
        const isLastItem = index === posts.length - 1
        return (
        <Post
            post={item}
            navigation={navigation}
            isLastItem={isLastItem}
        />
        )
    }

    return (
        <View style={styles.container}>
        <View style={styles.wrapUser}>
            <Image style={styles.avatarUser} source={{ uri: userPhoto }} />
            <View style={styles.wrapUserData}>
            <Text style={styles.titleUser}>{userName}</Text>
            <Text style={styles.emailUser}>{userEmail}</Text>
            </View>
        </View>
        <FlatList
            data={posts}
            style={styles.postsList}
            keyExtractor={(__, index) => index.toString()}
            renderItem={renderPostItem}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        flexDirection: 'column',
        gap: 32,
    },
    wrapUser: {
        // marginLeft: 16,
        marginTop: 32,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },

    titleUser: {
        fontFamily: 'RobotoMedium',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
    },
    postsList: {
        // marginHorizontal: 8,
        height: '50%',
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
    emailUser: {
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(33, 33, 33, 0.8)',
        fontFamily: 'RobotoRegular',
        fontSize: 11,
        lineHeight: 13,
    },
})