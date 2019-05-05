import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
import Searchscreen from '../screens/Searchscreen';
import Representatives from '../components/repre'
import RepProfile from '../components/Repprofile'
import Doctors from '../components/doctors'
import Docpro from '../components/doctorPro'
import Subject from '../components/subject'
import Subpage from '../components/subpage'
import Miss from '../components/miss'
import Event from '../screens/event';
import Help from '../screens/help';
import Hijjawi from '../screens/building/hijjawi';
import Library from '../screens/building/library';
import Science from '../screens/building/science';
import Reply from '../components/reply'
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Profile from '../screens/profile';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import News from '../screens/News';
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search:Searchscreen,
  repre:Representatives,
  Reppro:RepProfile,
  doctor:Doctors,
  subject:Subject,
  subpage:Subpage,
  doctorpro:Docpro,
  miss:Miss,
  event:Event,
  help:Help,
  hij:Hijjawi,
  sci:Science,
  reply:Reply,
  map:LinksScreen,
  lib:Library,
});

HomeStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Feather name="home" size={30} color={tintColor} />
)
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
  Search:Searchscreen,
  repre:Representatives,
  Reppro:RepProfile,
  doctor:Doctors,
  subject:Subject,
  subpage:Subpage,
  doctorpro:Docpro,
  miss:Miss,
  event:Event,
  help:Help,
  hij:Hijjawi,
  sci:Science,

  lib:Library,
});

LinksStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <MaterialIcons name="location-on" size={30} color={tintColor} />
)
};

const Newsstack = createStackNavigator({
  news: News,
});

Newsstack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
  tabBarLabel: null,
  tabBarIcon: ({ tintColor }) => (
    <MaterialCommunityIcons name="newspaper" size={30} color={tintColor} />
  )
};


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  login:Login,
  signup:Signup,

});

SettingsStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
  tabBarLabel: null,
  tabBarIcon: ({ tintColor }) => (
    <Feather name="user" size={30} color={tintColor} />
  )
};
export const Roo = createSwitchNavigator(
  {
login:SettingsStack,
    profile: Profile,


  }

);
Roo.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
  tabBarLabel: null,
  tabBarIcon: ({ tintColor }) => (
    <Feather name="user" size={30} color={tintColor} />
  )
};
export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  Newsstack,
  Roo,
});
