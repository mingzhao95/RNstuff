import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import WkWebView from 'react-native-wkwebview-reborn';

export default class App extends Component {
    componentWillMount() {};
    titletext = "hello";
    render() {
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <WkWebView style={{flex: 1}}
                source={{html: `
                  <html>
                    <body style='font-size: 36pt;'>
                      Input case title here:
                      <input id='title-text' type='text' value='eg. 30M with Malaria' style='font-size: 36pt; width: 100%'/>
                    </body>
                  </html>`}}
                ref="webview" />
            <Text style={{ fontWeight: 'bold', padding: 10 }} onPress={() =>
                {this.refs.webview.evaluateJavaScript(`document.getElementById('title-text').value`).then((title_name) 
                => alert(`Success! New title is: ${title_name}`))  } }>Submit</Text>
            {/* <Text style={{ fontWeight: 'bold', padding: 10 }} onPress={() =>
                alert(`${this.titletext}`)}>Submit</Text> */}
        </View>
    );
    }
}