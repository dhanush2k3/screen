import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import StackNavigationDemo from '../component/stack/StackNavigationDemo';

export type RootStackParamsList = {
  Home: undefined;
  StackDemo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
