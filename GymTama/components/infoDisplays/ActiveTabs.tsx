/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CondensedStats = () => (
  <Text style={styles.text}>Condensed Stats Content</Text>
);
const DetailedStats = () => (
  <Text style={styles.text}>Detailed Stats Content</Text>
);

const CondensedWorkoutSchedule = () => (
  <Text style={styles.text}>Condensed Workout Schedule Content</Text>
);
const DetailedWorkoutSchedule = () => (
  <Text style={styles.text}>Detailed Workout Schedule Content</Text>
);

const CondensedWorkoutLogs = () => (
  <Text style={styles.text}>Condensed Workout Logs Content</Text>
);
const DetailedWorkoutLogs = () => (
  <Text style={styles.text}>Detailed Workout Logs Content</Text>
);

const CondensedMacro = () => (
  <Text style={styles.text}>Condensed Macro Content</Text>
);
const DetailedMacro = () => (
  <Text style={styles.text}>Detailed Macro Content</Text>
);

const CondensedCalories = () => (
  <Text style={styles.text}>Condensed Calories Content</Text>
);
const DetailedCalories = () => (
  <Text style={styles.text}>Detailed Calories Content</Text>
);

const CondensedStepCounter = () => (
  <Text style={styles.text}>Condensed Step Counter Content</Text>
);
const DetailedStepCounter = () => (
  <Text style={styles.text}>Detailed Step Counter Content</Text>
);

const CondensedScanner = () => (
  <Text style={styles.text}>Condensed Scanner Content</Text>
);
const DetailedScanner = () => (
  <Text style={styles.text}>Detailed Scanner Content</Text>
);

const ActiveTabs = ({activeTab, isFullDetail}) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'Stats':
        return isFullDetail ? <DetailedStats /> : <CondensedStats />;
      case 'WorkoutSchedule':
        return isFullDetail ? (
          <DetailedWorkoutSchedule />
        ) : (
          <CondensedWorkoutSchedule />
        );
      case 'WorkoutLogs':
        return isFullDetail ? (
          <DetailedWorkoutLogs />
        ) : (
          <CondensedWorkoutLogs />
        );
      case 'Macro':
        return isFullDetail ? <DetailedMacro /> : <CondensedMacro />;
      case 'Calories':
        return isFullDetail ? <DetailedCalories /> : <CondensedCalories />;
      case 'StepCounter':
        return isFullDetail ? (
          <DetailedStepCounter />
        ) : (
          <CondensedStepCounter />
        );
      case 'Scanner':
        return isFullDetail ? <DetailedScanner /> : <CondensedScanner />;
      default:
        return <Text style={styles.text}>No Content</Text>;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ActiveTabs;
