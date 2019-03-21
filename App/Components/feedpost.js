import React, { Component } from 'react'
import {Platform, StyleSheet,
View,Text,TextInput} from 'react-native';
import { Container, Header,
    Icon, Left,Item,Input,
  Body, Right, Content,Button,Thumbnail } from 'native-base';
import { dimensions } from '../Constants/styles';
import { facebookStyles } from '../Constants/styles';
import { colors } from '../Constants/colors';
import Hr from './hr';
export default class FeedPost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.postView}>
          <View style={styles.userView}>
            <Thumbnail style={styles.thumbNail}
            source={{uri: 'http://p.imgci.com/db/PICTURES/CMS/128400/128483.1.jpg'}} />
          </View>
          <View style={styles.postText}>
            <TextInput
            style={styles.input}
            placeholder="Write something here..."
            placeholderTextColor={colors.backGray}
            returnKeyType="go"
            underlineColorAndroid="transparent"
            autoCorrect={false} />
          </View>
          <View style={styles.postImage}>
            <Icon name="ios-images" style={styles.imageIcon}/>
            <Text style={styles.images}>Images</Text>
          </View>
      </View>
      <Hr />
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 0.08*dimensions.height,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15
    },
    postView: {
      width: dimensions.width,
      flex: 1,
      flexDirection: 'row',
      marginVertical: 5
    },
    userView: {
      width: '10%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    postText: {
      width: '80%',
      flex: 3,
      borderColor: colors.backGray,
      borderWidth: 1,
      borderRadius: 0.12*dimensions.height / 2
    },
    postImage: {
      width: '10%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      fontSize: 12,
      color: colors.backGray,
    },
    imageIcon: {
      color: colors.black,
      fontSize: 22
    },
    thumbNail: {
      padding: 8,
      height: 0.06*dimensions.height,
      width:0.06*dimensions.height,
    },
    images: {
      fontSize: 12
    }
  });