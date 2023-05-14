import React from 'react';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../redux/auth/authOperations'
import { useDispatch } from 'react-redux'

export const Header = ({ title }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(logout())
    }
    const [fontsLoaded] = useFonts({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    }) 

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" size={24} color="#212121"
                backgroundColor={'transparent'}
                onPress={() => navigation.navigate("Home")}
            />
            
            <Text style={styles.titleHeader}>{title}</Text>

            <MaterialIcons name="logout" size={24} color="black"
                backgroundColor="transparent"
                onPress={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 54,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0.5 0 rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(13.5914)',
    },
    titleHeader: {
        fontFamily: 'RobotoMedium',
        fontSize: 17,
        lineHeight: 22,
        color: '#212121',
    },
});
