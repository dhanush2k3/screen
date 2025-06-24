import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { StackParamsList } from './StackNavigationDemo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackScreenNavigationProp = NativeStackNavigationProp<
  StackParamsList,
  'StackScreen1'
>;

const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();
  return (
    <View>
      <Text>StackScreen1</Text>
      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate('StackScreen2', { itemId: 100 })}
      />
    </View>
  );
};
export default StackScreen1;
