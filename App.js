import React, { useCallback, useState } from 'react';
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { StyleSheet, View } from 'react-native';
import { Home } from './Screens/Home';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

// const MainStack = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }
  
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>

    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //     <NavigationContainer>
    //       <MainStack.Navigator initialRouteName="RegistrationScreen">
    //         <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }}/>
    //         <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    //         <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    //         <MainStack.Screen name="PostsScreen" component={PostsScreen} />
    //         <MainStack.Screen name="CreatPostsScreen" component={CreatPostsScreen} />
    //         <MainStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    //         <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
    //         <MainStack.Screen name="MapScreen" component={MapScreen} />
    //       </MainStack.Navigator>
    //     </NavigationContainer>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

