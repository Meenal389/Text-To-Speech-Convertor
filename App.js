import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  speak = () => {
    var voice = this.state.text;
    this.state.text === '' ? alert('Please Enter a word') : Speech.speak(voice);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="green"
          centerComponent={{
            text: 'Text-to-Speech',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <View>
          <Image
            source={require('./logo.png')}
            style={{ width: 250, height: 250, alignSelf: 'center',marginTop:40 }}
          />
        </View>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          placeholder="TYPE YOUR TEXT HERE"
          value={this.state.text}
        />
        <View>
          <TouchableOpacity style={styles.go} onPress={this.speak}>
            <Text style={styles.displayText}>Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFFED4',
  },
  inputBox: {
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    backgroundColor: 'lavender',
    outline: 'none',
  },
  go: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
