import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, ActivityIndicator,
  StatusBar,
   View} from 'react-native';
import { tabNavigator } from './App/Navigation/navigation';
import { AuthStack } from './App/Navigation/navigation';
import {  createSwitchNavigator } from 'react-navigation';
import { colors } from './App/Constants/colors';

export class App extends Component {
  constructor() {
    super();
    this._authValidation();
  }
  _authValidation = async () => {
    const api_token = await AsyncStorage.getItem('api_token');
    this.props.navigation.navigate(api_token ? 'App' : 'Auth');
  };
  render() {
    return (
       <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
          />
          <ActivityIndicator />
        </View>
    );
  }
}
export default createSwitchNavigator(
  {
    AuthLoading: App,
    App: tabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
