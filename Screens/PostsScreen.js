import React from 'react';
import { moduleName } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultPostsScreen } from './DefaultPostsScreen';
import { CommentsScreen } from './CommentsScreen';
import { MapScreen } from './MapScreen';
import { Ionicons, EvilIcons, Feather } from '@expo/vector-icons';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import { logout } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const NestedScreen = createStackNavigator()

export const PostsScreen = () => {
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(logout())
    }

    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen
                name="Публікації"
                component={DefaultPostsScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle: styles.bottomBorder,
                    headerRight: () => (
                        <TouchableOpacity
                        style={{ marginRight: 16 }}
                        onPress={() => dispatch(handleSubmit)}
                        >
                            <Ionicons
                                name="exit-outline"
                                size={28}
                                color="#BDBDBD"
                                backgroundColor="transparent"
                            />
                        </TouchableOpacity>
                    ),
                })}
            />

            <NestedScreen.Screen
                name="Comments"
                component={CommentsScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle: styles.buttomBorder,
                })}
            />

            <NestedScreen.Screen name="Map" component={MapScreen} />
        </NestedScreen.Navigator>
    )
}

const styles = StyleSheet.create({
    buttomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3',
    },
})