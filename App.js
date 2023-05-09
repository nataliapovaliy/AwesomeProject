import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { Home } from './Screens/Home';
import { PostsScreen } from './Screens/PostsScreen';
import { CreatPostsScreen } from './Screens/CreatePostsScreen';
import { ProfileScreen } from './Screens/ProfileScreen';
import { CommentsScreen } from './Screens/CommentsScreen';
import { MapScreen } from './Screens/MapScreen';

const MainStack = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="RegistrationScreen">
            <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }}/>
            <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <MainStack.Screen name="PostsScreen" component={PostsScreen} />
            <MainStack.Screen name="CreatPostsScreen" component={CreatPostsScreen} />
            <MainStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
            <MainStack.Screen name="MapScreen" component={MapScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})