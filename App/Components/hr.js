import React, { Component } from 'react'
import {Platform, StyleSheet,
    View} from 'react-native';
import { colors} from '../Constants/colors'
export default class Hr extends Component {
  render() {
    return (
      <View style={styles.hr}>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
    hr: {
        width: '100%',
        backgroundColor: colors.backGray,
        height: 5,
    }
});
