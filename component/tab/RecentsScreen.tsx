import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const recentCalls = [
  { id: '1', name: 'Mom', time: '9:41 am' },
  { id: '2', name: 'Dad', time: '3:39 pm' },
  { id: '3', name: 'Sister', time: '9:49 pm' },
  { id: '4', name: 'Friend', time: '8:26 pm' },
  { id: '5', name: 'Bro', time: '12:21 pm' },
  { id: '6', name: 'Uncle', time: '7:55 pm' },
  { id: '7', name: 'Aunt', time: '7:21 pm' },
];

const RecentScreen: React.FC = () => {
  const renderItem = ({
    item,
  }: {
    item: { id: string; name: string; time: string };
  }) => (
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
    backgroundColor: '#1E1E2E', // Deep navy background
    padding: 10,
  },
  row: {
    backgroundColor: '#2A2A40', // Card background
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
