import { Button, Text, View } from 'react-native';
import { StackParamsList } from './StackNavigationDemo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type StackScreen2NavigationProp = NativeStackNavigationProp<
  StackParamsList,
  'StackScreen2'
>;

type stackScreenRoute = RouteProp<StackParamsList, 'StackScreen2'>;

const StackScreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProp>();
  const route = useRoute<stackScreenRoute>();

  return (
    <View>
      <Text>StackScreen2</Text>
      <Text>Item:ID : {route.params.itemId}</Text>
      <Button
        title="Go to OverView"
        onPress={() => navigation.navigate('OverViewScreen')}
      />
      <Button
        title="Go to TaskDetail"
        onPress={() => navigation.navigate('TaskDetailScreen')}
      />
    </View>
  );
};

export default StackScreen2;
