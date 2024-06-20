/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.square}>
            <Text style={styles.text}>avatar placement</Text>
          </View>
          <View style={styles.separator}></View>

          <View style={styles.display}>
            <Text style={styles.text}>
              Live active tabs with gesture features
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
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
  grid: {
    width: '100%',
    paddingVertical: 10,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    backgroundColor: '#B0C4DE',
    margin: 2,
    borderRadius: 10,
  },
  largeBox: {
    height: 90,
    marginBottom: -10,
    borderRadius: 10,
  },
  mediumBox: {
    flex: 1,
    height: 100,
    marginHorizontal: 2,
    borderRadius: 10,
  },
  smallBox: {
    width: '30%',
    height: 100,
    borderRadius: 10,
  },
});

export default Home;
