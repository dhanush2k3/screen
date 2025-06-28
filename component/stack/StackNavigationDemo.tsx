import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';
import ContactScreen from './ContactScreen';
import TabNavigationDemo from '../tab/TabNavigationDemo';
import TaskDetailScreen from './TaskDetailScreen';
import OverViewScreen from './OverViewScreen';

export type StackParamsList = {
  StackScreen1: undefined;
  StackScreen2: { itemId: number };
  OverViewScreen: undefined;
  ContactScreen: undefined;
  tabs: { name: string };
  TaskDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

const StackNavigationDemo: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'Stack' }}
        name="StackScreen1"
        component={StackScreen1}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: `Item ${route.params.itemId}`,
        })}
        name="StackScreen2"
        component={StackScreen2}
      />
      <Stack.Screen
        options={{ title: 'OverViewScreen', headerShown: false }}
        name="OverViewScreen"
        component={OverViewScreen}
      />
      <Stack.Screen
        options={{ title: 'TaskDetailScreen', headerShown: false }}
        name="TaskDetailScreen"
        component={TaskDetailScreen}
      />
      <Stack.Screen
        options={{ title: 'ContactScreen' }}
        name="ContactScreen"
        component={ContactScreen}
      />
      <Stack.Screen
        options={{ title: 'TabNavigationDemo' }}
        name="tabs"
        component={TabNavigationDemo}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
