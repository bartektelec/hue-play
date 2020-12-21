import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Container, List, ListItem, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

interface HueBridge {
  id: string;
  internalipaddress: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [isReady, setReady] = useState(false);
  const [bridgelist, setBridgelist] = useState<HueBridge[]>([]);
  const [connected, setConnected] = useState<string | null>(null);

  const handleBridgeConnect = useCallback((ip: string) => {
    setConnected(ip);
  }, []);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setReady(true);
    }

    async function searchBridges() {
      const response = await fetch('https://discovery.meethue.com/');
      const result = await response.json();
      setBridgelist(result);
    }

    loadFonts();
    searchBridges();
  }, []);

  if (!isReady) return <AppLoading />;

  return (
    <Container style={styles.container}>
      <List>
        {bridgelist.map(bridge => (
          <ListItem
            onPress={() => handleBridgeConnect(bridge.internalipaddress)}
          >
            <Text>
              {bridge.id} - {bridge.internalipaddress}
            </Text>
          </ListItem>
        ))}
      </List>
      {connected ? <Text>Connected to {connected}</Text> : null}
    </Container>
  );
}
