import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import Tap from './Tap';
import Styles from './Styles';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/


  
  

export default class App extends Component{
  render() {
    return (     
        <ThemeProvider >
        <View style={Styles.container}>
          <Tap/>
        </View>
        </ThemeProvider>
    
    );
  }
}

