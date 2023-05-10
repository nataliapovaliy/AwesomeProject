import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text, FlatList    
} from 'react-native';
import { useFonts } from 'expo-font';
import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultPostsScreen } from './DefaultPostsScreen';
import { CommentsScreen } from './CommentsScreen';
// import { MapScreen } from './MapScreen';

const NestedScreen = createStackNavigator()

export const PostsScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen
                name="DefaultScreen"
                component={DefaultPostsScreen}
            />
            <NestedScreen.Screen name="Comments" component={CommentsScreen} />
            {/* <NestedScreen.Screen name="Map" component={MapScreen} /> */}
        </NestedScreen.Navigator>
    )
}