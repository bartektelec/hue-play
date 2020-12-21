import * as React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Container style={styles.container}>
      <Text>asd hello from About</Text>
    </Container>
  );
};

export default About;
