import { StyleSheet,Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const facebookStyles = StyleSheet.create({
  contentPadding:{
    paddingHorizontal: 10
  }
});

export const dimensions = {
  width: viewportWidth,
  height: viewportHeight
}