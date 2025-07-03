import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';

interface DayData {
  date: string;
  count: number;
  month: string;
}

const generateDummyData = (days: number = 365): DayData[] => {
  const data: DayData[] = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const month = date.toLocaleString('default', { month: 'short' });
    data.unshift({
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 5),
      month,
    });
  }

  return data;
};

const getColor = (count: number): string => {
  const colors = [
    '#161B22', // 0
    '#0E4429',
    '#006D32',
    '#26A641',
    '#39D353', // 4
  ];
  return colors[Math.min(count, 4)];
};

const getMonthLabels = (weeks: DayData[][]): string[] => {
  let lastMonth = '';
  return weeks.map(week => {
    const firstDay = week[0];
    if (firstDay.month !== lastMonth) {
      lastMonth = firstDay.month;
      return firstDay.month;
    }
    return '';
  });
};

const StreakTrackerScreen = () => {
  const data = generateDummyData();
  const weeks = Math.ceil(data.length / 7);

  const grid: DayData[][] = Array.from({ length: weeks }, (_, weekIdx) =>
    data.slice(weekIdx * 7, weekIdx * 7 + 7),
  );

  const monthLabels = getMonthLabels(grid);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Streak Tracker</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.gridContainer}>
            {/* Month Labels */}
            <View style={styles.monthRow}>
              {monthLabels.map((month, i) => (
                <Text key={i} style={styles.monthLabel}>
                  {month}
                </Text>
              ))}
            </View>

            {/* Grid with border */}
            <View style={styles.gridBorder}>
              <View style={styles.grid}>
                {grid.map((week, weekIdx) => (
                  <View key={weekIdx} style={styles.column}>
                    {week.map((day, dayIdx) => (
                      <View
                        key={dayIdx}
                        style={[
                          styles.cell,
                          {
                            backgroundColor: getColor(day.count),
                            borderColor: '#30363D',
                          },
                        ]}
                      />
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'column',
  },
  monthRow: {
    flexDirection: 'row',
    marginBottom: 4,
    marginLeft: 6,
  },
  monthLabel: {
    width: 18,
    textAlign: 'center',
    color: '#8B949E',
    fontSize: 10,
    marginHorizontal: 1,
  },
  gridBorder: {
    padding: 6,
    borderWidth: 1,
    borderColor: '#30363D',
    borderRadius: 8,
  },
  grid: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    marginHorizontal: 1,
  },
  cell: {
    width: 16,
    height: 16,
    marginVertical: 1,
    borderRadius: 3,
    borderWidth: 1,
  },
});

export default StreakTrackerScreen;
