import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';

export interface NavigatorProps {}

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC<NavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
