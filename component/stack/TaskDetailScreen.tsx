import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const TaskDetailScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.Container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Wallet App</Text>
          <Text style={styles.title}>UX Research</Text>
        </View>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../assets/close.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, styles.blueIcon]}>
            <Image
              source={require('../../assets/share.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 2nd part tags and time stamp */}
      <View style={styles.infoRow}>
        <View style={styles.tagContainer}>
          {/* Tags */}
          <View style={styles.tag}>
            <Text style={styles.tagText}>High Priority</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Management</Text>
          </View>
        </View>
        {/* timeStamp */}
        <View style={styles.timeContainer}>
          <Text style={styles.timeLabel}>TimeSpent</Text>
          <Text style={styles.timeText}>2hr 14min</Text>
        </View>
      </View>
      {/* ProgressBar */}
      <View style={styles.progressSection}>
        <Text style={styles.dateText}>Feb 1</Text>
        <View style={styles.barContainer}>
          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>
        </View>
        <Text style={styles.dateText}>Feb 10</Text>
      </View>
      <View style={styles.descriptionCard}>
        <Text style={styles.descriptionTitle}>Task Description</Text>
        <Text style={styles.descriptionText}>
          Enhance Wallet App UX through targeted research, identifying user
          needs and streamlining usability for optimal satisfaction.
        </Text>
      </View>
      {/* Attachments */}
      <View style={styles.attachmentsCard}>
        {/* Title */}
        <Text style={styles.attachmentsTitle}>Attachments</Text>
        {/* attachement row */}
        <View style={styles.attachmentRow}>
          <View style={styles.attachmentPill}>
            <Text style={styles.attachmentText}>📂Instructions.pdf</Text>
          </View>
          <View style={styles.attachmentPill}>
            <Text style={styles.attachmentText}>📂Estimates.pdf</Text>
          </View>
          <TouchableOpacity style={styles.addAttachment}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* CheckList Section */}
      <View style={styles.checkListCard}>
        {/* Header Row */}
        <View style={styles.checklistHeader}>
          <Text style={styles.checkListTitle}>Checklist</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Subtask</Text>
          </TouchableOpacity>
        </View>

        {/* Disabled item */}
        <View style={styles.checklistItem}>
          <View style={[styles.circleCheckbox, styles.disabledCheckbox]} />
          <Text style={styles.disabledText}>Identify key user scenarios</Text>
        </View>

        {/* Checklist items */}
        <View style={styles.checklistItem}>
          <View style={styles.circleCheckbox} />
          <Text style={styles.checkText}>
            Study functionality and UX of other apps
          </Text>
        </View>

        <View style={styles.checklistItem}>
          <View style={styles.circleCheckbox} />
          <Text style={styles.checkText}>
            Conduct testing of current user paths
          </Text>
        </View>

        <View style={styles.checklistItem}>
          <View style={styles.circleCheckbox} />
          <Text style={styles.checkText}>
            Evaluate current security measures
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>Mark as Complete</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const COLORS = {
  dark: '#2F2F3E',
  blue: '#3D5AFE',
  white: '#fff',
  gray: '#999',
  soft: '#E7EEFF',
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.soft,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 33,
    fontWeight: '700',
    color: COLORS.dark,
  },
  iconButton: {
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
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  blueIcon: {
    backgroundColor: COLORS.blue,
    marginTop: -8,
  },
  rightIcons: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    paddingRight: 20,
    paddingTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  tagText: {
    fontSize: 13,
    color: COLORS.dark,
    fontWeight: '400',
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontSize: 13,
    color: COLORS.gray,
    fontWeight: '500',
  },
  timeText: {
    fontSize: 14,
    color: COLORS.dark,
    fontWeight: '700',
  },
  progressSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginHorizontal: 16,
    marginTop: 20,
  },
  progressBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5F7DF',
    borderRadius: 100,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  barContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  progressFill: {
    width: '70%',
    height: '100%',
    backgroundColor: '#8ED03B',
    borderRadius: 100,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.dark,
    width: 45,
    textAlign: 'center',
  },
  descriptionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginTop: 20,
    marginHorizontal: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.dark,
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 20,
  },
  attachmentsCard: {
    backgroundColor: COLORS.blue,
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 25,
    marginTop: 10,
  },
  attachmentsTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  attachmentRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
  },
  attachmentPill: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 6,
  },
  attachmentText: {
    fontSize: 13,
    color: COLORS.dark,
    fontWeight: '500',
  },
  addAttachment: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.dark,
  },
  checkListCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 30,
    marginTop: 20,
    marginBottom: 20,
  },

  checklistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  checkListTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.dark,
  },

  addButton: {
    backgroundColor: '#F2F3F7',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  addButtonText: {
    fontSize: 12,
    color: COLORS.dark,
    fontWeight: '500',
  },

  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  circleCheckbox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#BDBDBD',
    marginRight: 10,
  },

  disabledCheckbox: {
    borderColor: '#E0E0E0',
  },

  checkText: {
    fontSize: 14,
    color: COLORS.dark,
    fontWeight: '500',
    lineHeight: 25,
  },

  disabledText: {
    fontSize: 14,
    color: '#BDBDBD',
    textDecorationLine: 'line-through',
    lineHeight: 25,
  },
  completeButton: {
    backgroundColor: COLORS.dark,
    marginHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  completeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default TaskDetailScreen;
