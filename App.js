/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  TextInput, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      placeHolder: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }

  handleSubmit(inputValue) {
    var regEx = /Greg|greg/g;
    var translation = inputValue.replace(regEx, "Green");
    this.setState({message:  `Hi ${translation}!`});
    this.textInput.clear();
  };

  clearMessage() {
    this.setState({message: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>GregEx</Text>
        <Text style={styles.subheader}>(Gregular Expression)</Text>
        <TextInput 
          style={styles.input}
          placeholder="What's your name?"
          ref={input =>  this.textInput = input}
          onSubmitEditing={({nativeEvent}) => this.handleSubmit(nativeEvent.text)}
          clearButtonMode='always'
        />
        <Text style={styles.message}>{this.state.message}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={this.clearMessage}
        >
          <Text style={{textAlign: 'center', fontSize: 20}}>Reset</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
