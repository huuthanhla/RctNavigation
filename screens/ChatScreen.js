
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class ChatScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.titleNav}`,
    headerRight: <Button title='Info'
      onPress={() => {} }
    />
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
    backgroundColor: '#15F097',
  }
});