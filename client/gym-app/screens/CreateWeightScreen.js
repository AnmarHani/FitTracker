
import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'

import axios from '../API/axios'

export default function CreateWeightScreen({ navigation }) {
  const [exercise, setExercise] = React.useState('')
  const [reps, setReps] = React.useState(0)
  const [sets, setSets] = React.useState(0)
  const [weight, setWeight] = React.useState(0)
  const [rpe, setRpe] = React.useState(0)
  const [day, setDay] = React.useState('')
  const [note, setNote] = React.useState('No Notes Written.')


  const createHandler = async() => {
    data={
      "exe_name":exercise,
      "reps":parseInt(reps),
      "sets":parseInt(sets),
      "weight":parseInt(weight),
      "rpe":parseInt(rpe),
      "category":day,
      "volume":0,
      "note":note,
    }
    try{
      const response = await axios.post('api/CreateWeight/', data)
      alert("Successfully Created!")
      navigation.navigate('Home')
    }catch(err){
      alert(err)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.form}>
        <AText style={styles.title} regularTitle={true} text={'Create A New Exercise'}/>
        <AInput setState={setExercise} style={styles.input} placeholder={'Exercise Name'} />
        <AInput keyboardType="numeric" setState={setReps} style={styles.input} placeholder={'Reps'} />
        <AInput keyboardType="numeric" setState={setSets} style={styles.input} placeholder={'Sets'} />
        <AInput keyboardType="numeric" setState={setWeight} style={styles.input} placeholder={'Weight (KG)'} />
        <AInput setState={setDay} style={styles.input} placeholder={'Legs | Push | Pull'} />
        <AInput keyboardType="numeric" setState={setRpe} style={styles.input} placeholder={'RPE'} />
        <AInput multiline={true} setState={setNote} style={styles.note} placeholder={'Notes...'} />
        <View style={styles.bottomContainer}>
          <AButton style={styles.title} text={'Create'} onPress={createHandler} />
        </View>
      </SafeAreaView>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center'
  },
  title:{
    alignSelf:'center',
    marginVertical:15
  },
  input:{
    marginVertical:15
  },
  note:{
    marginVertical:15,
    height:100
  },
  bottomContainer:{
    margin: 15,
  }
});