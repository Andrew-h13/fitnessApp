/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.square}>
            <Text> avatar placement </Text>
          </View>
          <View style={styles.seperate}></View>
          <Text>options area Bento UI</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f3',
  },
  container: {
    flex: 1,

    margin: 'auto',
  },
  textArea: {
    fontSize: 23,
  },
  square: {
    width: 300,
    height: 200,
    backgroundColor: 'grey',
    margin: 50,
    marginTop: 20,
  },
  seperate: {
    width: 400,
    height: 2,
    backgroundColor: 'black',
    marginTop: -20,
  },
});

export default Home;
