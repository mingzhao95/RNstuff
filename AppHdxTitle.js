import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
  } from 'react-native';
import WkWebView from 'react-native-wkwebview-reborn';
import ImagePicker from 'react-native-image-picker';
import Notification from 'react-native-in-app-notification';
import Notif from './AppNotif'

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


class MediaUploads extends Component {

  state = {
    avatarSource: null,
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  }
  render() {
    return (
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, {justifyContent: 'center', alignItems: 'center', marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Upload Photo</Text> :
            <Image
              style={styles.avatar}
              source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 150,
    height: 150
  }
});

var textElementProp = 'innerText' || 'innerHTML';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {titlehdx: "default placeholder"}
    }

    clearText() {
      this._textInput.setNativeProps({text: ''});
    }

    render() {
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <Notif />
            <Trapezoid text={this.state.titlehdx}/> 
            <View style={{ flex: 1}}>
                <WkWebView style={{flex: 1}}
                    source={{uri: "https://www.humandx.org/"}}
                    ref="webview" />
                <Text
                    style={{ fontWeight: 'bold', padding: 10}}
                    onPress={() => 
                        this.refs.webview.evaluateJavaScript(`document.getElementsByClassName(
                        'banner-text', 'banner-text-human')[0].${textElementProp}`)
                        .then((title_name) => this.setState({titlehdx: title_name}))}>
                    Submit Title
                </Text>
                <TouchableOpacity onPress={() => this.clearText()}>
                    <TextInput ref={component => this._textInput = component} />
                </TouchableOpacity>
                <MediaUploads />
            </View>   
        </View>   
    );
    }
}