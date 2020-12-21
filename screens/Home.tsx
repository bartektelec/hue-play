import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { Container, Text, Button, Content, List, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/Navigator';

const styles = StyleSheet.create({
  container: {},
  topText: {
    margin: 16,
    fontSize: 24,
  },
  smallText: {
    fontSize: 18,
    margin: 16,
  },
});

type RouteProps = RouteProp<RootStackParamList, 'Home'>;

type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

export interface HomeProps {
  route: RouteProps;
  navigation: NavigationProps;
}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<NavigationProps>();
  const [bridges, setBridges] = React.useState<HueBridge[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function findBridges() {
      try {
        const response = await fetch('https://discovery.meethue.com/');
        const result = await response.json();
        setBridges(result);
      } catch (error) {
        setError(error.message);
      }
    }

    findBridges();
  }, []);

  if (!bridges.length) return <AppLoading />;

  if (error) return <Text>Something went wrong: {error}</Text>;

  return (
    <Container style={styles.container}>
      <Content>
        <Text style={styles.topText}>
          Found {bridges.length} bridges in your network
        </Text>
        <Text style={styles.smallText}>Click on one to connect</Text>
        <List>
          {bridges.map(bridge => (
            <ListItem>
              <Text>
                {bridge.internalipaddress} - {bridge.id}
              </Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Home;
