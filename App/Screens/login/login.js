import React, { Component } from 'react'

import { Text,StyleSheet, AsyncStorage, View,
  TouchableWithoutFeedback, Dimensions, StatusBar,TextInput,
  SafeAreaView,Keyboard,TouchableOpacity,Modal,ScrollView,
  KeyboardAvoidingView,Image,ToastAndroid, ImageBackground } from 'react-native';
export default class Login extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          LOGIN
        </Text>
        <TouchableOpacity style={styles.btnLogin}
          onPress={()=> this._signInAsync()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _signInAsync() {
    AsyncStorage.setItem('api_token','12345');
    this.props.navigation.navigate('App');
  }
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
    backgroundColor: 'blue',
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32,63,70)',
    fontWeight: 'bold',
    fontSize: 18
  },
});
  