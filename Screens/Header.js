import React from 'react';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native-web';

export const Header = ({ title }) => {
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
                // style={styles.returnSvg}
                backgroundColor={'transparent'}
                // header={20}
            />
            
            <Text style={styles.titleHeader}>{title}</Text>

            <MaterialIcons name="logout" size={24} color="black"
                backgroundColor="transparent"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        // fontFamily: 'RobotoRegular',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 54,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0.5 0 rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(13.5914)',
        // borderBottomWidth: 1,
        // borderBottomColor: '#BDBDBD',
    },
    titleHeader: {
        fontFamily: 'RobotoMedium',
        fontSize: 17,
        lineHeight: 22,
        color: '#212121',
    },
});
