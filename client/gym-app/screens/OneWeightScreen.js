import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'
import ACard from '../components/ACard'

import axios from '../API/axios'

import {colors} from '../assets/colors'

export default function OneWeightScreen({ route, navigation }) {
  const { weight } = route.params;

  const deleteHandler = async() => {
    try{
      const response = await axios.delete(`api/DeleteWeights/${weight.id}/`)
      alert('Deleted Successfully!')
      navigation.navigate('Home')
    }catch(err){
      alert(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}>
          <ACard style={styles.card}> 
            <AText style={styles.text} regularTitle={true} text={`${weight.category} Day`} />
            <AText style={styles.text} regularTitle={true} text={`Exercise name: ${weight.exe_name}`} />
            <AText style={styles.text} boldDescription={true} text={`Weight: ${weight.weight}`} />
            <AText style={styles.text} boldDescription={true} text={`Volume: ${weight.volume}`} />
            <AText style={styles.text} boldDescription={true} text={`Reps: ${weight.reps}`} />
            <AText style={styles.text} boldDescription={true} text={`Sets: ${weight.sets}`} />
            <AText style={styles.text} boldDescription={true} text={`RPE: ${weight.rpe}`} />
            <AText style={styles.text} boldDescription={true} text={`Date: ${weight.created_at}`} />
            <AText style={styles.note} regularDescription={true} text={`${weight.note}`} />
            <AButton onPress={deleteHandler} style={styles.deleteBtn} text={'Delete'} />
          </ACard>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  deleteBtn:{
    backgroundColor:'red',
    width:'99%',
    marginTop:60
  },
  cardContainer: {
    flex:1,
    marginVertical: (Dimensions.get('window').height / 15),
    justifyContent:'center',
    alignSelf:'center'
  },
  text:{
    color:colors.secondaryFont,
    fontSize:15,
    margin:5,
  },
  note:{
    borderTopColor: 'black',
    borderTopWidth: 2,
    color:colors.secondaryFont,
    fontSize:15,
    margin:5,
    padding:5
  },
  card:{
    flex:1,
    width:Dimensions.get('window').width / 1.2,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    padding:30,
    marginTop:15,
  },
});