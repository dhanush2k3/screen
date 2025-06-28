import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function OverViewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {/* Background Header */}
      <View style={styles.topBackground} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.header}>
          {/* Avatar and Name */}
          <View style={styles.profileLeft}>
            <Image
              source={require('../../assets/smith.jpg')}
              style={styles.avatar}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.profileName}>Erick Johnson</Text>
              <Text style={styles.profileSubtitle}>Today you have 6 tasks</Text>
            </View>
          </View>

          {/* Right Icons */}
          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconCircle}>
              <Image
                source={require('../../assets/gear.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.iconCircle, styles.blueIcon]}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.sectionTitle}>
          <Text style={{ fontWeight: 'bold', fontSize: 50 }}>Overview </Text>
          <Text>of {'\n'}</Text>
          <Text>your </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 50 }}>activities</Text>
        </Text>

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
            <View style={styles.avatarGroup}>
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
        </View>

        {/* Productivity + Premium Row */}
        <View style={styles.bottomCards}>
          <View style={styles.productivityCard}>
            <Text style={styles.bottomTitle}>
              <Text>Week{'\n'}</Text>
              <Text>Productivity</Text>
            </Text>
            <Image
              style={styles.weekImg}
              source={require('../../assets/weekW-png.png')}
            />
          </View>
          <View style={styles.premiumCard}>
            <Text style={styles.preCardTitle}>SmartTasker</Text>
            <Text style={styles.premiumTitle}>
              <Text>Upgrade{'\n'}</Text>
              <Text>to Premium</Text>
            </Text>
            <Text style={{ flexDirection: 'row' }}>
              <Text style={styles.premiumPrice}>$15/m </Text>
              <Text style={styles.premiumOffer}>-20%</Text>
            </Text>
            <Text style={styles.premiumNote}>
              <Text>All the features of{'\n'}</Text>
              <Text>the service</Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Nav Bar */}
      <View style={styles.navBar}>
        {['Home', 'Schedule', 'Teams', 'Profile'].map((item, idx) => (
          <View
            key={item}
            style={[
              styles.navItemWrapper,
              idx === 0 && styles.activeNavWrapper, // assuming Home is active
            ]}
          >
            <Text style={[styles.navItem, idx === 0 && styles.activeNavText]}>
              {item}
            </Text>
          </View>
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
  soft: '#E7EEFF',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.soft },
  topBackground: {
    position: 'absolute',
    width: '100%',
    height: 240,
    // backgroundColor: COLORS.dark,
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
    marginBottom: 20,
  },

  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '500',
  },
  profileSubtitle: {
    fontSize: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },

  blueIcon: {
    backgroundColor: '#326AFD',
    marginLeft: -8,
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  plus: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 40,
    // fontWeight: 'bold',
    color: '#0B0B2B',
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    gap: 2,
    flexWrap: 'wrap',
  },
  tabItem: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 15,
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
    elevation: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#DDE7FF',
    color: COLORS.blue,
    fontSize: 13,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    overflow: 'hidden',
  },
  taskTitle: {
    fontSize: 20,
    marginLeft: 4,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  taskDesc: {
    fontSize: 15,
    marginLeft: 4,
    color: COLORS.gray,
    marginBottom: 10,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: 10,
  },
  smallAvatar: {
    width: 44,
    height: 44,
    borderRadius: 25,
    marginLeft: -8,
  },
  morePeople: {
    fontSize: 12,
    color: COLORS.dark,
    marginLeft: 4,
  },
  detailsButton: {
    backgroundColor: COLORS.dark,
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 25,
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
    height: 200,
  },
  productivityCard: {
    width: '48%',
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bottomTitle: {
    fontWeight: '800',
    color: COLORS.dark,
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 8,
  },
  weekImg: {
    width: 150,
    height: 120,
  },
  preCardTitle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '500',
  },
  premiumCard: {
    width: '48%',
    backgroundColor: '#326AFD',
    borderRadius: 20,
    padding: 16,
  },
  premiumTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  premiumPrice: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  premiumOffer: {
    color: '#CCCCCC',
    fontSize: 15,
    marginBottom: 4,
    textAlign: 'right',
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumNote: {
    color: '#CCCCCC',
    fontSize: 14,
    textAlign: 'left',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 40,
    backgroundColor: '#0B0B2B',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },

  navItemWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 30,
  },

  activeNavWrapper: {
    backgroundColor: '#fff',
  },

  navItem: {
    color: '#fff',
    fontWeight: '600',
  },

  activeNavText: {
    color: '#0B0B2B', // dark text inside white bubble
  },
});
