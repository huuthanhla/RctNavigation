
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class ChatScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Chat'
  })

  render() {

    // const { params } = this.props.navigation.state
    // const { goBack } = this.props.navigation

    return (
      <View style={styles.container}>
        {/* <Text>{params.username}</Text>
        <Button title='Back'
          onPress={() => {
            goBack()
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',
  }
});