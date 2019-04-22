import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

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

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  Newsstack,
  SettingsStack,
});
