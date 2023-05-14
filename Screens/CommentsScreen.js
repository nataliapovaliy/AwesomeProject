import React, { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {
  doc,
  updateDoc,
  collection,
  getDoc,
  addDoc,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { selectPhoto, selectUserId } from '../redux/auth/authSelectors'
import { Comment } from '../Components/Comment'
import { useSelector } from 'react-redux'
import { Keyboard } from 'react-native'

export const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState('')
  const [allComments, setAllComments] = useState()
  const userId = useSelector(selectUserId)
  const userPhoto = useSelector(selectPhoto)
  const { photo, id } = route
  const postId = route.key
  const date = new Date()

  useEffect(() => {
    getAllPosts()
  }, [])

  const createPost = async () => {
    await addDoc(collection(db, 'posts', postId, 'comments'), {
      comment,
      date,
      userId,
      userPhoto,
    })
    const docRef = doc(db, 'posts', postId)
    const docSnap = await getDoc(docRef)
    const docData = docSnap.data()
    await updateDoc(docRef, { comments: docData.comments + 1 })
  }

  const getAllPosts = async () => {
    onSnapshot(collection(db, 'posts', postId, 'comments'), (querySnapshot) => {
      const commentsArray = querySnapshot.docs

        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .sort((a, b) => a.date.seconds - b.date.seconds)

      setAllComments(commentsArray)
    })
  }

  return (
    <View style={styles.container}>
      <Image style={styles.commentImage} source={{ uri: photo }} />

      <FlatList
        data={allComments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Comment item={item} />}
      />
      <View>
        <TextInput
          placeholder="Comment..."
          style={styles.commentInput}
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity activeOpacity={0.8} style={styles.commentButton}>
          <AntDesign
            name="arrowup"
            size={24}
            color="#FFFFFF"
            style={styles.commentIconArrowup}
            opacity={0.6}
            onPress={() => {
              setComment('')
              Keyboard.dismiss()
              createPost()
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    marginBottom: 16,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
  },
  commentImage: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },

  commentInput: {
    padding: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    fontFamily: 'RobotoMedium',
    fontSize: 16,
    lineHeight: 19,
  },
  commentButton: {
    marginTop: -43,
    marginRight: 8,
    height: 34,
    width: 34,
    borderRadius: 50,
    backgroundColor: '#FF6C00',
    alignSelf: 'flex-end',
  },
  commentIconArrowup: {
    alignSelf: 'center',
    paddingTop: 4,
  },
})