import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Trapezoid extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'powderblue'}}>
        <Text style={{marginLeft: 20, fontSize: 14, fontWeight: 'bold',}}>{this.props.text}</Text>
      </View>
    )
  }
}

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {text: 'Title shows up here'}
  }
  
  onImageClick() {
      Alert.alert('You tapped the button!')
  }

  render() {
    var pic = {
      uri: 'https://d1qb2nb5cznatu.cloudfront.net/users/461336-large?1438466605'
    };
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Trapezoid text={this.state.text}/>
        <View style={styles.container}>
          <TextInput
          style={{height: 40}}
          placeholder="Type here to add title of case!"
          onChangeText={(text) => this.setState({text})}
          />
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <TouchableOpacity activeOpacity={.5} onPress={this.onImageClick.bind(this)}>
            <Image source={pic} style={{width: 180, height: 180}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
