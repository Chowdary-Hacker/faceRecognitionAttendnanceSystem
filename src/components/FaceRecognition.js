// src/FaceRecognition.js

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCv, Mat, CvCamera } from 'react-native-opencv3';

const FaceRecognition = () => {
  const cameraRef = useRef(null);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.addListener('onFrame', handleFrame);
    }
    return () => {
      if (cameraRef.current) {
        cameraRef.current.removeListener('onFrame', handleFrame);
      }
    };
  }, []);

  const handleFrame = (mat) => {
    // Face detection logic here
  };

  return (
    <View style={styles.container}>
      <CvCamera
        ref={cameraRef}
        style={styles.camera}
        facing={CvCamera.Constants.CameraFacing.FRONT}
      />
      <Text>Face Recognition</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});

export default FaceRecognition;
