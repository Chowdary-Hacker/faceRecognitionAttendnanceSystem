// src/App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FaceRecognition from './src/components/FaceRecognition';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <View style={styles.container}>
      <FaceRecognition />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
export default codePush(codePushOptions)(App);
