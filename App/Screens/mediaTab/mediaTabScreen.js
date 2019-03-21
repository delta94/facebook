import React, { Component } from 'react'
import {Platform, StyleSheet, ActivityIndicator,
    Text,
     View} from 'react-native';
export default class MediaTabScreen extends Component {
  static navigationOptions = {
    headerTitle: 'HOME'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          MEDIA TAB
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});