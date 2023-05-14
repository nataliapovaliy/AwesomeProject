import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { selectUserId } from '../redux/auth/authSelectors'
import moment from 'moment-timezone'
moment.tz.setDefault('Europe/Kiev')

export const CommentComponent = ({ item }) => {
  const id = useSelector(selectUserId)

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: item.userId !== id ? 'row' : 'row-reverse',
      }}
    >
      <Image
        source={{
          uri: item.userPhoto ? item.userPhoto : '../assets/images/User.png',
        }}
        style={{
          ...styles.commentImage,
          marginLeft: item.userId !== id ? 0 : 16,
          marginRight: item.userId !== id ? 16 : 0,
        }}
      />
      <View
        style={{
          ...styles.commentWrap,
          marginLeft: item.userId !== id ? 16 : 0,
          borderTopStartRadius: item.userId !== id ? 0 : 6,
          borderTopEndRadius: item.userId !== id ? 6 : 0,
        }}
      >
        <Text style={styles.commentText}>{item.comment}</Text>
        <Text style={styles.commentDate}>
          {moment(item.date.seconds * 1000).format('DD MMMM, YYYY')}
          &nbsp;|&nbsp;
          {moment(item.date.seconds * 1000).format('hh:mm')}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    marginBottom: 24,
  },
  commentImage: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },

  commentWrap: {
    flex: 1,
    padding: 16,
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  commentText: {
    marginBottom: 8,
    fontFamily: 'RobotoRegular',
    fontSize: 13,
    lineHeight: 18,
    color: '#212121',
  },
  commentDate: {
    textAlign: 'right',
    fontFamily: 'RobotoRegular',
    fontSize: 10,
    lineHeight: 12,
    color: '#BDBDBD',
  },
})