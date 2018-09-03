import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import ChatScreen from './screens/ChatScreen'


// Tabbar include navigation
const MyStackNavigator = createStackNavigator({
  MyHome: {screen: HomeScreen},
  ChatScreen: {screen: ChatScreen}
})

const DemoNavigation = createTabNavigator(
  {
    Home: { screen: MyStackNavigator },
    Detail: { screen: DetailScreen }
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'violet'
    }    
  }
);

export default DemoNavigation;

// Navigation include tabbar
// const DemoNavigation = createTabNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Detail: { screen: DetailScreen }
//   },
//   {
//     swipeEnabled: true,
//     tabBarOptions: {
//       activeTintColor: 'violet'
//     }    
//   }
// );
// const MyStackNavigator = createStackNavigator({
//   MyHome: {screen: DemoNavigation},
//   ChatScreen: {screen: ChatScreen}
// })

// export default MyStackNavigator;