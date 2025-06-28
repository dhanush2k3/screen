import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function TabScreen1() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Header */}
      <View style={styles.topBackground} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.profileName}>Erick Johnson</Text>
            <Text style={styles.profileSubtitle}>Today you have 6 tasks</Text>
          </View>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
            style={styles.avatar}
          />
        </View>

        {/* Title */}
        <Text style={styles.sectionTitle}>Overview of your activities</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          {['All', 'Meetings', 'Researches', 'Design'].map(item => (
            <TouchableOpacity key={item} style={styles.tabItem}>
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Task Card */}
        <View style={styles.taskCard}>
          <View style={styles.badgeRow}>
            <Text style={styles.badge}>High Priority</Text>
            <Text style={styles.badge}>2 days left</Text>
          </View>
          <Text style={styles.taskTitle}>Wallet App Design</Text>
          <Text style={styles.taskDesc}>
            Creating wireframes for login flow
          </Text>
          <View style={styles.avatarRow}>
            {[4, 5, 6].map(i => (
              <Image
                key={i}
                source={{ uri: `https://i.pravatar.cc/150?img=${i}` }}
                style={styles.smallAvatar}
              />
            ))}
            <Text style={styles.morePeople}>+2 people</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>

        {/* Productivity + Premium Row */}
        <View style={styles.bottomCards}>
          <View style={styles.productivityCard}>
            <Text style={styles.bottomTitle}>Week Productivity</Text>
            <View style={styles.graphPlaceholder} />
          </View>
          <View style={styles.premiumCard}>
            <Text style={styles.premiumTitle}>Upgrade to Premium</Text>
            <Text style={styles.premiumPrice}>$15/m</Text>
            <Text style={styles.premiumOffer}>-20%</Text>
            <Text style={styles.premiumNote}>
              All the features of the service
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Nav Bar */}
      <View style={styles.navBar}>
        {['Home', 'Schedule', 'Teams', 'Profile'].map((item, idx) => (
          <Text
            key={item}
            style={[styles.navItem, idx === 0 && styles.activeNav]}
          >
            {item}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  dark: '#2F2F3E',
  blue: '#3D5AFE',
  white: '#fff',
  gray: '#999',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  topBackground: {
    position: 'absolute',
    width: '100%',
    height: 240,
    backgroundColor: COLORS.dark,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 130,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSubtitle: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 2,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 24,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  tabItem: {
    backgroundColor: '#E1E6F2',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },
  tabText: {
    fontSize: 13,
    color: COLORS.dark,
  },
  taskCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#DDE7FF',
    color: COLORS.blue,
    fontSize: 12,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    overflow: 'hidden',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  taskDesc: {
    fontSize: 13,
    color: '#666',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  smallAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6,
  },
  morePeople: {
    fontSize: 12,
    color: COLORS.gray,
    marginLeft: 4,
  },
  detailsButton: {
    backgroundColor: COLORS.dark,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 12,
  },
  detailsButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 13,
  },
  bottomCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  productivityCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bottomTitle: {
    fontWeight: 'bold',
    color: COLORS.dark,
    fontSize: 14,
    marginBottom: 8,
  },
  graphPlaceholder: {
    height: 40,
    backgroundColor: '#EEE',
    borderRadius: 10,
  },
  premiumCard: {
    width: '48%',
    backgroundColor: COLORS.blue,
    borderRadius: 20,
    padding: 16,
  },
  premiumTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  premiumPrice: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  premiumOffer: {
    color: COLORS.white,
    fontSize: 12,
    marginBottom: 4,
  },
  premiumNote: {
    color: COLORS.white,
    fontSize: 11,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: COLORS.dark,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    color: '#999',
    fontWeight: '600',
  },
  activeNav: {
    color: COLORS.white,
    textDecorationLine: 'underline',
  },
});
