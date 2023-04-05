
import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Picker,ScrollView } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'

import axios from '../API/axios'

export default function CreateCaloriesScreen({ navigation }) {
  const [weight, setWeight] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [age, setAge] = React.useState(0)
  const [activity, setActivity] = React.useState('') //1.55 , 1.725

  if(activity === 'Lose'){
    setActivity(1.1)
  }
  if(activity === 'Maintain'){    
    setActivity(1.36)
  }
  if(activity === 'Gain'){
    setActivity(1.725)
  }

  const calculateHandler = async() => {
    data={
      "height":parseInt(height),
      "user_weight":parseInt(weight),
      "age":parseInt(age),
      "activity":activity,
    }
    try{
      const response = await axios.post('api/CreateCalories/', data)
      alert(`
        Your Estimated Calories are ${response.data.data.calories}!
        You Can See More Information on Your Calories History.
      `)
      navigation.navigate('Home')
    }catch(err){
      alert(err)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <ScrollView>
      <SafeAreaView style={styles.form}>
        <AText style={styles.title} regularTitle={true} text={'Calculate Your Calories'}/>
        <AInput keyboardType="numeric" setState={setWeight} style={styles.input} placeholder={'Your Weight (KG)'} />
        <AInput keyboardType="numeric" setState={setHeight} style={styles.input} placeholder={'Your Height (CM)'} />
        <AInput keyboardType="numeric" setState={setAge} style={styles.input} placeholder={'Your Age'} />
        <AInput setState={setActivity} style={styles.input} placeholder={'Lose | Maintain | Gain'} />
        <View style={styles.bottomContainer}>
          <AButton style={styles.title} text={'Calculate'} onPress={calculateHandler} />
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
  bottomContainer:{
    margin: 15,
  }
});