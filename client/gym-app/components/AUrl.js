import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';
import {colors} from '../assets/colors'
import AText from './AText'
export default function AButton(props) {

  return (
    <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
      <Text style={[{color:'#0466c8', fontSize:20}, styles.textURL]}>Dont have an account?</Text>
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