import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Notification from 'react-native-in-app-notification';


export default class Notif extends Component {
  render() {
    return (
      <View>
      <TouchableOpacity onPress={() => this.refs.notif.show({
            title: 'You pressed it!',
            message: 'The notification has been triggered',
            onPress: () => alert('Alert', 'You clicked the notification!'),
          })}>
        <View style={{width: 150, height: 150, justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
        <Text>Click me</Text>
        </View>
      </TouchableOpacity>
      <Notification ref="notif" />
    </View>
    )
  }
}
