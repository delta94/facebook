import React, { Component } from 'react'
import {Platform, StyleSheet,Text,
  ScrollView,Image,ImageBackground,
  View} from 'react-native';
import { colors} from '../Constants/colors';
import { dimensions } from '../Constants/styles';
import Swiper from 'react-native-swiper';

export default class HomeSwiperComponent extends Component {
  images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/260px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaXMvO9qYaVJoHNmz1hp-Q6PKhIt-4sEXOgFoIhhtvdc69mr_',
'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/23/Pictures/sachin-tendulkar_043f2426-e7e2-11e7-bb33-29502a427e3f.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf7rU4X2EzQ4CvEi6ajburejb5HzNU5lJc-UaZAFKA_pFcs2w',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/260px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaXMvO9qYaVJoHNmz1hp-Q6PKhIt-4sEXOgFoIhhtvdc69mr_',
'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/23/Pictures/sachin-tendulkar_043f2426-e7e2-11e7-bb33-29502a427e3f.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf7rU4X2EzQ4CvEi6ajburejb5HzNU5lJc-UaZAFKA_pFcs2w',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/260px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaXMvO9qYaVJoHNmz1hp-Q6PKhIt-4sEXOgFoIhhtvdc69mr_',
'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/23/Pictures/sachin-tendulkar_043f2426-e7e2-11e7-bb33-29502a427e3f.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf7rU4X2EzQ4CvEi6ajburejb5HzNU5lJc-UaZAFKA_pFcs2w']
  render() {
    return (
      <View style={{flex: 1, paddingHorizontal: 10}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{width: '50%'}}>Stories</Text>
      <Text style={{width: '50%',justifyContent:'flex-end',alignItems: 'flex-end'}}>Your archieve</Text>
      </View>
        
        <View style={{height: 0.15*dimensions.height,marginTop: 20}}>
          <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
           {this.images.map((img,i)=> {
             return <SwipeView key={i} url={img}/>
           })}
          </ScrollView>
        </View>
      </View>
    )
  }
}
const SwipeView = (props)=> {
  return (
    <View style={{height: 0.15*dimensions.height,flex: 1,
      width: dimensions.width/4,marginRight: 20
      }}>
        <View style={{flex: 2}}>
          <Image 
          style={{flex: 1, width: null,
            borderRadius: 8,
        height: null,resizeMode:'cover'}}
          source={{uri: props.url}} />
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
  
  wrapper: {
    width: '100%',
  },
  topTextView: {
    flex: 1,
    flexDirection: 'row',
    height: 0.04*dimensions.height,
  },
  story: {
    width: '50%',
    justifyContent: 'flex-start'
  },
  archieve: {
    width: '50%',
    justifyContent: 'flex-end'
  },
  swiper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
})