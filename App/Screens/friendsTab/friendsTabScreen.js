import React, { Component } from 'react'
import {TouchableOpacity, StyleSheet, AsyncStorage,
    Text,
     View} from 'react-native';
export default class FriendsTabScreen extends Component {
  static navigationOptions = {
    headerTitle: 'TAB2'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          TAB2
        </Text>
        <TouchableOpacity style={styles.btnLogin}
          onPress={()=> this._signOut()}>
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnLogin: {
    width: 150, 
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: 'red',
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32,63,70)',
    fontWeight: 'bold',
    fontSize: 18
  },
});