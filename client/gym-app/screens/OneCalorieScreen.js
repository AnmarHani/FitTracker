import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'
import ACard from '../components/ACard'

import axios from '../API/axios'

import {colors} from '../assets/colors'

export default function OneCalorieScreen({ route, navigation }) {
  const [ate, setAte] = React.useState(0)
  const { calorie } = route.params;

  const submitHandler = async() => {
    data={
      'calories_ate':parseInt(ate)
    }
    try{
      const response = await axios.put('api/CalPercentage/',data)
      alert('Added Successfully!')
      navigation.navigate('Home')
    }catch(err){
      alert(err)
    }
  }
  const deleteHandler = async() => {
    try{
      const response = await axios.delete(`api/DeleteCalories/${calorie.id}/`)
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
            <AText style={styles.text} regularTitle={true} text={`Calories: ${calorie.calories}`} />
            <AText style={styles.text} boldDescription={true} text={`Protein: ${calorie.protien}`} />
            <AText style={styles.text} boldDescription={true} text={`Fats: ${calorie.fat}`} />
            <AText style={styles.text} boldDescription={true} text={`Carbs: ${calorie.carb}`} />
            <AText style={styles.text} boldDescription={true} text={`Your Weight: ${calorie.user_weight}`} />
            <AText style={styles.text} boldDescription={true} text={`Your Height: ${calorie.height}`} />
            <AText style={styles.text} boldDescription={true} text={`Your Age: ${calorie.age}`} />
            <AText style={styles.text} boldDescription={true} text={`Percentage: ${calorie.percentage}`} />
            <AText style={styles.text} boldDescription={true} text={`Date: ${calorie.created_at}`} />
            <AButton onPress={deleteHandler} style={styles.deleteBtn} text={'Delete'} />
          </ACard>
        </View>
    </SafeAreaView>
  );
}
            // <View style={styles.inputContainer}>
            //   <AInput setState={setAte} style={styles.input} placeholder={'How many Calories Ate?'} />
            //   <AButton onPress={submitHandler} style={styles.btn} text={'Submit'} />
            // </View>

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  inputContainer: {
    flex:1,
    justifyContent:'center'
  },
  deleteBtn:{
    backgroundColor:'red',
    width:'99%',
  },
  input: {
    width:'99%',
    borderColor: 'black',
    borderWidth:1,
    height:30,
    fontSize:16,
    textAlign:'center',
    justifyContent:'center'
  },
  btn: {
    height:30,
    width:'99%',
    marginTop:14,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
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
    margin:5
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