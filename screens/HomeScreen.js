
import React, {Component} from 'react';
import { 
  StyleSheet, 
  Button, 
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const MenuButtons = (props) => (
  <TouchableOpacity onPress = {() => {props.navigation.openDrawer()} }>
    <Image tintColor='black' style={{marginLeft: 15}} source={require('../imgs/hamburger.png')} />
  </TouchableOpacity>
)

export default class HomeScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'React Native',
    headerBackTitle: null,
    tabBarLabel: "Home",
    headerLeft: <MenuButtons navigation={navigation}/>,
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../imgs/home.png')} 
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  })

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button 
          title='Push Me'
          onPress={() => {
            navigate('ChatScreen', { titleNav: 'ChatScreen' })
          }}
        />
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});