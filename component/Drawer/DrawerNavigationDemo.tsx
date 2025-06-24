import { Text, View, Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerParamsList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamsList>();

type DrawerScreen1Prop = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'DrawerScreen1'>;
};
type DrawerScreen2Prop = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'DrawerScreen2'>;
};

const DrawerScreen1: React.FC<DrawerScreen1Prop> = ({ navigation }) => {
  return (
    <View>
      <Text>Drawer Screen 1</Text>
      <Button title="openDrawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerScreen2: React.FC<DrawerScreen2Prop> = ({ navigation }) => {
  return (
    <View>
      <Text>Drawer Screen 2</Text>
      <Button title="OpenDrawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerNavigationdemo: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationdemo;
