import React from 'react';
import { Image } from 'react-native';
import { 
  createStackNavigator, 
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import ChatScreen from './screens/ChatScreen'
import MenuScreen from './screens/MenuScreen'

//-----------Tabbar include navigation
// const MyStackNavigator = createStackNavigator({
//   MyHome: {screen: HomeScreen},
//   ChatScreen: {screen: ChatScreen}
// })

// const DemoNavigation = createTabNavigator(
//   {
//     Home: { screen: MyStackNavigator },
//     Detail: { screen: DetailScreen }
//   },
//   {
//     swipeEnabled: true,
//     tabBarOptions: {
//       activeTintColor: 'violet'
//     }    
//   }
// );

// export default DemoNavigation;

//-----------Navigation include tabbar
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


//-----------DrawerNavigator
const MyStackNavigator = createStackNavigator({
  MyHome: {screen: HomeScreen},
  ChatScreen: {screen: ChatScreen}
})

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: MyStackNavigator },
    Detail: { screen: DetailScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <Image source={require('./imgs/home.png')} 
          style={[{tintColor: tintColor}]}
        />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {screen: bottomTabNavigator},
  Detail: { screen: DetailScreen }
}, {
  contentComponent: props => <MenuScreen {...props} />
})

export default MyDrawerNavigator;
