import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

const MainStack = createStackNavigator()

export const Home = () => {
  const [fontsLoaded] = useFonts({
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  })
  
  if (!fontsLoaded) {
        return null
  }

  return (<></>)
  
  // return (
  //   <NavigationContainer>
  //     <MainStack.Navigator initialRouteName="PostsScreen">
  //       <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
  //       <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
  //       <MainStack.Screen
  //         name="PostsScreen" component={PostsScreen}
  //         options={{
  //             title: 'Публікації',
  //             headerStyle: {
  //               boxShadow: '0 0.5 0 rgba(0, 0, 0, 0.3)',
  //               backdropFilter: 'blur(13.5914)',
  //             },
  //             headerTintColor: '#212121',
  //             headerTitleStyle: {
  //               fontFamily: 'Roboto-Regular',
  //               fontSize: 17,
  //               lineHeight: 22,
  //             },
  //             headerLeft: () => (
  //               <View style={styles.button} onPress={() => alert('This is a button!')}>
  //                 <AntDesign name="arrowleft" size={24} color="#212121" />
  //               </View>
                

  //               // <Button
  //               //   onPress={() => alert('This is a button!')}
  //               //   title="Press me"
  //               //   color="#fff"
  //               // />
  //             ),
  //           }}
  //       />
  //     </MainStack.Navigator>
  //   </NavigationContainer>
  // )
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  }
})