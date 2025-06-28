import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TabScreen2: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Erick Johnson</Text>
        <Text style={styles.subHeaderText}>Today you have 6 tasks</Text>
      </View>

      {/* Overview Title */}
      <Text style={styles.overviewTitle}>Overview of your activities</Text>

      {/* Task Section */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.taskCard}>
          <View style={styles.priorityTag}>
            <Text style={styles.priorityText}>High Priority</Text>
          </View>
          <Text style={styles.taskTitle}>Wallet App Design</Text>
          <Text style={styles.taskDescription}>
            Creating wireframes for login flow
          </Text>
          <Text style={styles.dueDate}>2 days left</Text>
          <Text style={styles.participants}>+2 people</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>

        {/* Productivity Section */}
        <View style={styles.productivityCard}>
          <Text style={styles.productivityTitle}>Week Productivity</Text>
          {/* Placeholder for a chart */}
          <View style={styles.chartPlaceholder}>
            <Text>M T W T F</Text>
          </View>
        </View>

        {/* Subscription Section */}
        <View style={styles.subscriptionCard}>
          <Text style={styles.subscriptionTitle}>SmartTasker</Text>
          <Text style={styles.subscriptionText}>Upgrade to Premium</Text>
          <Text style={styles.subscriptionPrice}>$15/m</Text>
          <Text style={styles.discount}>-20%</Text>
          <Text style={styles.subscriptionFeatures}>
            All the features of the service
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {['Home', 'Schedule', 'Teams', 'Profile'].map(item => (
          <TouchableOpacity key={item} style={styles.navButton}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#6B7280',
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  priorityTag: {
    backgroundColor: '#3B82F6',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'flex-start',
  },
  priorityText: {
    color: '#FFFFFF',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    color: '#6B7280',
  },
  dueDate: {
    color: '#FF4D4D',
  },
  participants: {
    marginVertical: 5,
  },
  detailsButton: {
    backgroundColor: '#3B82F6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#FFFFFF',
  },
  productivityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  productivityTitle: {
    fontSize: 18,
  },
  chartPlaceholder: {
    height: 100,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscriptionCard: {
    backgroundColor: '#EBF8FF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  subscriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subscriptionText: {
    fontSize: 16,
  },
  subscriptionPrice: {
    fontSize: 24,
  },
  discount: {
    color: '#FF4D4D',
  },
  subscriptionFeatures: {
    textAlign: 'center',
    marginTop: 5,
    color: '#6B7280',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navButton: {
    alignItems: 'center',
  },
});

export default TabScreen2;
