import * as React from 'react';
import { Container, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/Navigator';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
  return (
    <Container style={styles.container}>
      <Text>asd hello from home</Text>
      <Button onPress={() => navigation.navigate('About')}>
        <Text>Go to abouts</Text>
      </Button>
    </Container>
  );
};

export default Home;
