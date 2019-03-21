import React,{ Component } from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    console.log(this.props.url);
    return (
      <LottieView
      style={{width: '100%',height: '100%'}}
        source={require('../Assets/Lottie/loaderHome.json')}
        autoPlay
        loop
      />
    );
  }
}