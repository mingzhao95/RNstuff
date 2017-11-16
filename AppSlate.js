import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import WkWebView from 'react-native-wkwebview-reborn';
import ImagePicker from 'react-native-image-picker';

class Trapezoid extends Component {
    render() {
      return (
        <View style={{height: 30, justifyContent: 'center', alignItems: 'flex-start',
            backgroundColor: 'powderblue'}}>
          <Text style={{marginLeft: 20, fontSize: 14, fontWeight: 'bold',}}>{this.props.text}</Text>
        </View>
      )
    }
  }

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {titlehdx: "default placeholder"}
    }
    render() {
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <Trapezoid text={this.state.titlehdx}/> 
            <View style={{ flex: 1}}>
                <WkWebView style={{flex: 1}}
                    source={{uri: "https://dev.humandx.org/o/eugbwgfqblfajhe1l7tqw7hqe"}}
                    ref="webview" />
                <Text
                    style={{ fontWeight: 'bold', padding: 10 }}
                    onPress={() => 
                        this.refs.webview.evaluateJavaScript(`document.getElementsByClassName(
                        'case-patient-title-header', 'textarea')[0].innerText`)
                        .then((title_name) => this.setState({titlehdx: title_name}))}>
                    Submit
                </Text>
                <Text
                    style={{ fontWeight: 'bold', padding: 10 }}>
                    {/* onPress={}> */}
                    Upload Image</Text>
            </View>   
        </View>   
    );
    }
}