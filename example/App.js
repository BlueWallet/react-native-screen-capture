/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import ScreenCapture from 'react-native-screen-capture';

export default class App extends PureComponent {
  state = {
    disallowScreenshot: true,
    keepAwake: true,
  };
  componentDidMount() {
    ScreenCapture.disallowScreenshot(this.state.disallowScreenshot)
    ScreenCapture.keepAwake(this.state.keepAwake)
    // ScreenCapture.sampleMethod('Testing', 123, (message) => {
    //   this.setState({
    //     status: 'native callback received',
    //     message
    //   });
    // });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          this.setState({
            disallowScreenshot: !this.state.disallowScreenshot
          }, () => {
            ScreenCapture.disallowScreenshot(this.state.disallowScreenshot)
          })
        }} style={{ padding: 15, backgroundColor: this.state.disallowScreenshot ? '#5BE55B' : '#FF6666', margin: 15 }}>
          <Text>Disallow screenshot {!this.state.disallowScreenshot ? 'OFF' : 'ON'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.setState({
            keepAwake: !this.state.keepAwake
          }, () => {
            ScreenCapture.keepAwake(this.state.keepAwake)
          })
        }} style={{ padding: 15, backgroundColor: this.state.keepAwake ? '#5BE55B' : '#FF6666', margin: 15 }}>
          <Text>Keep screen {!this.state.keepAwake ? 'OFF' : 'ON'}</Text>
        </TouchableOpacity>
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
  },
});
