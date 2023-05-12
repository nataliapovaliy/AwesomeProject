import React, { useCallback, useState } from 'react';
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { StyleSheet, View } from 'react-native';
import { Home } from './Screens/Home';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

export default function App() {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  )
}
