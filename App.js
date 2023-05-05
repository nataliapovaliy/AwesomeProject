import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { Home } from './Screens/Home';
import { Button, View } from 'react-native';

const MainStack = createStackNavigator();

export default function App () {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name='Registration' component={RegistrationScreen} />
        <MainStack.Screen name='Login' component={LoginScreen} />
        <MainStack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Start screen",
            headerStyle: {
              // boxShadow: 0 0.5 0 rgba(0, 0, 0, 0.3),
              // backdropFilter: blur(13.5914),
              backgroundColor: "#f4511e"
            },
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontFamily: 'Roboto',
          fontStyle: normal,
          fontWeight: 500,
          fontSize: 17,
          lineHeight: 1.29,
        },
        headerLeft: () => (
          <Button
          onPress={() => alert("This is a button!")}
          title="Press me"
          color='#fff'
          />
        )
        
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
          </View>



    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   {/* <RegistrationScreen /> */}
    //   <LoginScreen />

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
