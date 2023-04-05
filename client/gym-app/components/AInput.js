import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';
import {colors} from '../assets/colors'

export default function AInput(props) {

  return (
    <TextInput 
      {...props}
      style={[styles.input, props.style]}
      onChangeText={(val) => props.setState(val)}
      placeholder={props.placeholder}
      autoCorrect={false}
      blurOnSubmit
      secureTextEntry={props.password}
    />
  );
}



const styles = StyleSheet.create({
  input : {
    fontFamily:'regular-font',
    height: 53,
    paddingHorizontal: 10,
    backgroundColor:colors.primary,
    placeholderTextColor:"#949494",
    fontSize:20,
    borderRadius:9,
    width:Dimensions.get('window').width / 1.2
  }
})