import React from 'react';
import { PostsScreen } from './PostsScreen';
import { CreatPostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';
import {Header} from './Header';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './LoginScreen';
import { RegistrationScreen } from './RegistrationScreen';
import { selectIsLogIn, selectRefresh } from '../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';

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
              if (route.name === "Публікації") {            
                return <Feather name="grid" size={size} color='rgba(33, 33, 33, 0.8)' />
              } else if (route.name === "Створити публікацію") {
                  return <Ionicons name="add" size={size} color='#FFFFFF' style={styles.addPost} />
                } else if (route.name === "Profile") {
                    return <Feather name="user" size={size} color={color} />
                  }          
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FF6C00',
            inactiveTintColor: 'rgba(33, 33, 33, 0.8)',
            showLabel: false,
            initialRouteName: 'PostsScreen',
          }}
        >
      
        <Tabs.Screen
          name="Публікації"
          component={PostsScreen}
          options={{
              headerShown: true,
              header: ({ navigation, route }) => <Header title={route.name} />,
            }}
        />
      
        {/* <Tabs.Screen
          name="Створити публікацію"
          component={CreatPostsScreen}
          options={{
              headerShown: true,
              header: ({ navigation, route }) => <Header title={route.name} />,
            }}
        /> */}
          
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
  addPost: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});

