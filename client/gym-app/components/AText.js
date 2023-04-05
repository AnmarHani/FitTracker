import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';
import {colors} from '../assets/colors'

export default function AText(props) {

  let type;

  if(props.regularTitle){
    type = {
      fontSize: 30
    }
  }
  if(props.boldTitle){
    type = {
      fontSize: 30, 
      fontFamily:'bold-font',
      color:colors.secondary
    }
  }
  if(props.bold){
    type = {
      fontFamily:'bold-font'
    }
  }
  if(props.regularDescription){
    type = {
      fontSize: 15,
      opacity: 0.8
    }
  }
  if(props.boldDescription){
    type = {
      fontSize: 15,
      fontFamily:'bold-font'
    }
  }

  return (
    <Text style={[styles.text, type, props.style]}>{props.text} <Text style={[styles.secondaryText, props.secondaryStyle]}>{props.secondaryText}</Text></Text>
  );
}

const styles = StyleSheet.create({
  text: {
      color:colors.font,
      fontFamily:'regular-font',
  },
  secondaryText: {
    fontFamily:'bold-font',
    opacity:1,
    color:colors.font,
    textDecorationLine:'underline'
  },
})