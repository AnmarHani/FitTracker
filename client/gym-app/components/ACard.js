import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';
import {colors} from '../assets/colors'

export default function ACard(props) {

  return (
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding:15,
    borderRadius:7,
    textAlign: 'center',
    alignContent: 'center',
    width:Dimensions.get('window').width / 1.2,
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
})