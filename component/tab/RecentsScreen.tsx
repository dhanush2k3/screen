import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  RecentScreen: undefined;
  ContactScreen: { name: string; image: any; details: string };
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RecentScreen'
>;

const recentCalls = [
  {
    id: '1',
    name: 'Karthik',
    time: '9:41 am',
    Image: require('../../assets/karthik.jpg'),
    details:
      'Frontend Developer at TechZone\n📞 +91 98765 43210\n✉️ karthik@example.com',
  },
  {
    id: '2',
    name: 'Miya',
    time: '3:39 pm',
    Image: require('../../assets/miya.jpg'),
    details:
      'Graphic Designer & Anime Lover\n📞 +91 91234 56789\n✉️ miya.chan@example.com',
  },
  {
    id: '3',
    name: 'Seth',
    time: '9:49 pm',
    Image: require('../../assets/seth.jpg'),
    details:
      'Freelance Photographer\n📞 +91 99887 76655\n✉️ seth.rogan@example.com',
  },
  {
    id: '4',
    name: 'Esmeralda',
    time: '8:26 pm',
    Image: require('../../assets/Esmeralda.jpg'),
    details:
      'UI/UX Designer at CreativeWorks\n📞 +91 96543 21098\n✉️ esmeralda.designs@example.com',
  },
  {
    id: '5',
    name: 'Dude',
    time: '12:21 pm',
    Image: require('../../assets/Dude.jpg'),
    details: 'Just a Chill Guy\n📞 +91 90000 11122\n✉️ dude.chill@example.com',
  },
  {
    id: '6',
    name: 'Victor',
    time: '7:55 pm',
    Image: require('../../assets/victor.jpg'),
    details:
      'Mechanical Engg. turned Dev\n📞 +91 98123 45670\n✉️ victor.mech@example.com',
  },
  {
    id: '7',
    name: 'Smith',
    time: '7:21 pm',
    Image: require('../../assets/smith.jpg'),
    details:
      'Cybersecurity Analyst\n📞 +91 99456 78901\n✉️ smith.john@example.com',
  },
];

const RecentScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      name: string;
      time: string;
      Image: any;
      details: string;
    };
  }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ContactScreen', {
          name: item.name,
          image: item.Image,
          details: item.details,
        })
      }
    >
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {item.name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recentCalls}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
    padding: 10,
  },
  row: {
    backgroundColor: '#2A2A40',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3E4A60',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    color: '#E0E6ED',
    fontSize: 16,
    fontWeight: '500',
  },
  time: {
    color: '#A5B0C2',
    fontSize: 14,
  },
});

export default RecentScreen;
