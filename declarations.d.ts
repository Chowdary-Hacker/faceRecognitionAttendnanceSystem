declare module 'react-native-opencv3' {
    import { Component } from 'react';
  
    interface CvCameraProps {
      style?: object;
      facing?: number;
    }
  
    export class CvCamera extends Component<CvCameraProps> {
      addListener(event: string, handler: (mat: any) => void): void;
      removeListener(event: string, handler: (mat: any) => void): void;
    }
  
    export class Mat {}
  }
  