/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import ActiveTabs from './infoDisplays/ActiveTabs';
import {Directions} from 'react-native-gesture-handler';
import DoubleTap from './functions/gesture/DoubleTap';

const TABS = [
  'Stats',
  'WorkoutSchedule',
  'WorkoutLogs',
  'Macro',
  'Calories',
  'StepCounter',
  'Scanner',
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('Stats');
  const [isFullDetail, setIsFullDetail] = useState(false);

  const handleSwipes = (directions: string) => {
    const currentIndex = TABS.indexOf(activeTab);
    if (directions === 'left' && currentIndex < TABS.length - 1) {
      setActiveTab(TABS[currentIndex + 1]);
    } else if (directions === 'right' && currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1]);
    }
  };

  // const handleGestureEvent = (event: {
  //   nativeEvent: {translationx: number; translationy: number};
  // }) => {
  //   if (event.nativeEvent.translationx < -50) {
  //     handleSwipes('left');
  //   } else if (event.nativeEvent.translationy > 50) {
  //     handleSwipes('right');
  //   }
  // };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
        Math.abs(gestureState.dx) > 10,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50) {
          handleSwipes('left');
        } else if (gestureState.dx > 50) {
          handleSwipes('right');
        }
      },
    }),
  ).current;

  const handleDoubleTap = () => {
    setIsFullDetail(!isFullDetail);
  };

  const [scrollEnabled, setScrollEnabled] = useState(true);

  const onScrollBeginDrag = () => {
    setScrollEnabled(true);
  };

  const onPanResponderGrant = () => {
    setScrollEnabled(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.square}>
          <Text style={styles.text}>avatar placement</Text>
        </View>
        <View style={styles.separator}></View>

        <ScrollView
          horizontal
          style={styles.tabBar}
          scrollEnabled={scrollEnabled}
          onScrollBeginDrag={onScrollBeginDrag}>
          {TABS.map(tabs => (
            <TouchableOpacity
              key={tabs}
              onPress={() => setActiveTab(tabs)}
              style={styles.tabButton}>
              <Text style={styles.text}>{tabs}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <DoubleTap
          onDoubleTap={handleDoubleTap}
          style={styles.display}
          {...panResponder.panHandlers}
          onPanResponderGrant={onPanResponderGrant}>
          <ActiveTabs activeTab={activeTab} isFullDetail={isFullDetail} />
        </DoubleTap>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  square: {
    width: '110%',
    height: 250,
    backgroundColor: '#B0C4DE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  display: {
    width: '110%',
    height: 514,
    backgroundColor: '#B0C4DE',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#333',
    marginVertical: 10,
  },
  tabBar: {
    flexDirection: 'row',
    margin: 10,
  },
  tabButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#add8e6',
    borderRadius: 5,
  },
});

export default Home;
