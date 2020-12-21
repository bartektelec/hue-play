import 'react-native-gesture-handler';
import React, { useEffect, useState, useCallback } from 'react';
import Navigator from './services/Navigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setReady(true);
    }
    loadFonts();
  }, []);

  if (!isReady) return <AppLoading />;

  return <Navigator />;
}
