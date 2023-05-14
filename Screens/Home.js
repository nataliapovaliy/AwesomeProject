import React from 'react';
import { PostsScreen } from './PostsScreen';
import { CreatPostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';
import {Header} from './Header';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './LoginScreen';
import { RegistrationScreen } from './RegistrationScreen';
import { selectIsLogIn, selectRefresh } from '../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';

const Tabs = createBottomTabNavigator();
const AuthTabs = createStackNavigator()

export const Home = () => {
  const isAuth = useSelector(selectIsLogIn)
  const dispatch = useDispatch()

  return (
    <NavigationContainer>
      {isAuth ? (
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === "Posts") {            
                return <Feather name="grid" size={size} color='rgba(33, 33, 33, 0.8)' />
              } else if (route.name === "CreatePosts") {
                return (
                  <View style={styles.iconWrap}>
                    <Ionicons name="add" size={size} color="#FFFFFF" style={styles.addPost} />
                  </View>
                )} else if (route.name === "Profile") {
                    return <Feather name="user" size={size} color={color} />
                  }          
            },
            tabBarActiveTintColor: '#FF6C00',
            tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
            tabBarShowLabel: false,
            initialRouteName: 'PostsScreen',
          })}          
        >
      
        <Tabs.Screen
          name="Posts"
          component={PostsScreen}
          options={{
              headerShown: false,
            }}
        />
      
        <Tabs.Screen
          name="CreatePosts"
          component={CreatPostsScreen}
          options={({ navigation }) => ({
              headerShown: true,
              headerTitleAlign: 'center',
              headerStyle: styles.bottomBorder,
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 16 }}
                  onPress={() => navigation.navigate('Home')}
                >
                  <AntDesign
                    name="arrowleft"
                    size={24}
                    color="#212121"
                    backgroundColor={'transparent'}
                    onPress={() => navigation.navigate('Home')}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
              headerShown: false,
              header: ({ navigation, route }) => <Header title={route.name} />,
            }}
        />
      
    </Tabs.Navigator>
      ) : (
            <AuthTabs.Navigator>
              <AuthTabs.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <AuthTabs.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
            </AuthTabs.Navigator>
          )
    }      
    </NavigationContainer>    
  )
}

const styles = StyleSheet.create({
  iconWrap: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    borderRadius: 20,
  },
  addPost: {},
    bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
});

