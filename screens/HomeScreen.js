
import React, {Component} from 'react';
import { StyleSheet, Button, View} from 'react-native';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
    headerBackTitle: null,
    headerTintColor: 'orange'
  }

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