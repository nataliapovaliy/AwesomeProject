import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

export const CommentsScreen = () => {
  const [fonts] = useFonts({
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fonts) {
    return null
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.commentWrap}>
          <View style={styles.commentImageWrap}>
            <Image
              source={{ uri: 'https://reactjs.org/logo-og.png' }}
              style={styles.commentImage}
            />
          </View>
          <View style={styles.commentlist}>
            <View style={styles.commentitem}>
              <View style={styles.commentAvatarWrap}>
                <Image
                  source={require('../assets/images/avatarUser.png')}
                  style={styles.commentAvatar}
                />
              </View>
              <View style={styles.commentTextWrap}>
                <Text style={styles.commentText}>
                  "Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!"
                </Text>
                <Text style={styles.commentData}>09 июня, 2020 | 09:14</Text>
              </View>
            </View>
            <View style={styles.commentitem}>
              <View style={styles.commentTextWrap}>
                <Text style={styles.commentText}>
                  "Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!"
                </Text>
                <Text style={styles.commentData}>09 июня, 2020 | 09:14</Text>
              </View>
              <View style={styles.commentAvatarWrap}>
                <Image
                  source={require('../assets/images/avatarUser.png')}
                  style={styles.commentAvatar}
                />
              </View>
            </View>
            <View style={styles.commentitem}>
              <View style={styles.commentAvatarWrap}>
                <Image
                  source={require('../assets/images/avatarUser.png')}
                  style={styles.commentAvatar}
                />
              </View>
              <View style={styles.commentTextWrap}>
                <Text style={styles.commentText}>
                  "Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!"
                </Text>
                <Text style={styles.commentData}>09 июня, 2020 | 09:14</Text>
              </View>
            </View>
            <TextInput style={styles.input} placeholder="Коментувати..." />
            <View style={styles.commentIonicons}>
              <Ionicons name="md-arrow-up-circle" size={34} color="#FF6C00" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
  },
  commentWrap: {
    display: 'flex',
    gap: 32,
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  commentImage: {
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  commentImageWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  commentlist: {
    gap: 24,
  },
  commentitem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  commentAvatarWrap: {
    width: 28,
    height: 28,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentAvatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  commentTextWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 16,
    width: 299,
    gap: 8,
  },
  commentText: {
    fontFamily: 'RobotoRegular',
    fontSize: 13,
    lineHeight: 18,
  },
  commentData: {
    fontFamily: 'RobotoRegular',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'right',
    color: '#BDBDBD',
  },
  input: {
    position: 'relative',

    height: 50,
    width: 343,
    padding: 16,

    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#E8E8E8',
    borderEndWidth: 1,
    backgroundColor: '#F6F6F6',
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 19,
  },
  commentIonicons: {
    position: 'absolute',
    top: 395,
    left: 300,
    textAlign: 'center',
  },
})