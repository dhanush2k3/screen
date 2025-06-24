import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import StackNavigationDemo from '../component/stack/StackNavigationDemo';
import TabNavigationDemo from '../component/tab/TabNavigationDemo';
import DrawerNavigationdemo from '../component/Drawer/DrawerNavigationDemo';

export type RootStackParamsList = {
  Home: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
      <Stack.Screen name="DrawerDemo" component={DrawerNavigationdemo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

