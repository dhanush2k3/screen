import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamsList } from './RootNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Stack Nav"
        onPress={() => {
          navigation.navigate('StackDemo');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
