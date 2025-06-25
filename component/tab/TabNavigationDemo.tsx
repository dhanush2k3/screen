import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';
import RecentScreen from './RecentsScreen';
import { StatusBar, Image } from 'react-native';

type BottomTabParamsList = {
  TabScreen1: undefined;
  TabScreen2: undefined;
  Recents: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const TabNavigationDemo: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#121212" barStyle="dark-content" />
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1E1E2E', // Deep navy
            borderTopColor: '#2A2A40', // Optional: match row bg
          },
          tabBarActiveTintColor: '#E0E6ED', // Light for active
          tabBarInactiveTintColor: '#8891A8', // Soft muted
          headerShown: false,
        }}
      >
        <BottomTab.Screen
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <Image
                source={require('../../assets/favourite.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#E0E6ED' : '#8891A8',
                }}
              />
            ),
          }}
          name="TabScreen1"
          component={TabScreen1}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <Image
                source={require('../../assets/recent.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#E0E6ED' : '#8891A8',
                }}
              />
            ),
            headerShown: false,
          }}
          name="Recents"
          component={RecentScreen}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <Image
                source={require('../../assets/Contact.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#E0E6ED' : '#8891A8',
                }}
              />
            ),
          }}
          name="TabScreen2"
          component={TabScreen2}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default TabNavigationDemo;
