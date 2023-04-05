import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';
import {colors} from '../assets/colors'
import AText from './AText'
export default function AButton(props) {

  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <AText style={[{textAlign:'center'}, props.textSyle]} text={props.text}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical:14,
    borderRadius:7,
    textAlign: 'center',
    width:Dimensions.get('window').width / 1.2,
    backgroundColor: colors.secondary
  },
})