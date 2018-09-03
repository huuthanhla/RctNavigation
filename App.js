import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

const DemoNavigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen }
})

export default DemoNavigation;