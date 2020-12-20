import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text: {
    color: 'red',
    backgroundColor: 'pink',
  },
});

export default function App() {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    async function load() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setReady(true);
    }

    load();
  }, []);

  if (!isReady) return <AppLoading />;

  return (
    <Container style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
    </Container>
  );
}
