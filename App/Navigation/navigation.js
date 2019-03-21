import { createStackNavigator,
  createBottomTabNavigator } from 'react-navigation';
import HomeTabScreen from '../Screens/homeTab/homeTabScreen';
import FriendsTabScreen from '../Screens/friendsTab/friendsTabScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../Screens/login/login';
import React, {Component} from 'react';
import MediaTabScreen from '../Screens/mediaTab/mediaTabScreen';
import NotificationTabScreen from '../Screens/notificationTab/notificationTabScreen';
import MenuTabScreen from '../Screens/menuTab/menuTabScreen';

const HomeStack = createStackNavigator({
  home: HomeTabScreen
},{
});
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const FriendsStack = createStackNavigator({
  friends: FriendsTabScreen
},{
});
FriendsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const MediaTabStack = createStackNavigator({
  media: MediaTabScreen
},{
});
MediaTabStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const NotificationTabStack = createStackNavigator({
  notifications: NotificationTabScreen
},{
});
NotificationTabStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const MenuTabStack = createStackNavigator({
  menu: MenuTabScreen
},{
});
MenuTabStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export const tabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Friends: FriendsStack,
  media: MediaTabStack,
  notifications: NotificationTabStack,
  menu: MenuTabStack
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'ios-paper-outline';
      } else if (routeName === 'Friends') {
        iconName = 'ios-contacts-outline';
      } else if (routeName === 'media') {
        iconName = 'ios-videocam-outline';
      } else if (routeName === 'notifications') {
        iconName = 'ios-notifications-outline';
      } else if (routeName === 'menu') {
        iconName = 'ios-menu';
      }
      return <Ionicons name={iconName} 
      size={focused? 26 : 24} 
      color={tintColor} 
      />;
    },
  }),
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#3B5998',
    labelStyle: {
    fontSize: 12,
    fontWeight: '500'
  },
  showLabel: false,
  style: {
    backgroundColor: 'white',
  },
    inActiveTintColor: 'grey'
  }
});
export const AuthStack = createStackNavigator({ login: Login });
