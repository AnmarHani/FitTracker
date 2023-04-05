
import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'
import ACard from '../components/ACard'

import axios from '../API/axios'

import {colors} from '../assets/colors'

export default function HistoryScreen({ navigation }) {

  const [lastWeight, setLastWeight] = React.useState({
    best_weight_weight:0,
    best_weight_volume:0,
    percentage:0
  })

  React.useEffect(()=>{
    async function getData(){
      const response = await axios.get('api/ProgressOverLoad/')
      if(response){
        setLastWeight(response.data)
      }
    }
    getData()
  },[])

  let percentageStyle;
  if(lastWeight.percentage > 1 ){
    percentageStyle = {
      color:'green',
      margin:20
    }
  }else{

    percentageStyle = {
      color:'red',
      margin:20
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <ACard style={styles.card}> 
          <AButton style={styles.btn} textSyle={{color:'black'}} text={"Go To Exercises History"} onPress={()=>navigation.navigate('Weights History')} />
        </ACard>
        <ACard style={styles.card}> 
          <AButton style={styles.btn} textSyle={{color:'black'}} text={"Go To Calories History"} onPress={()=>navigation.navigate('Calories History')}/>
        </ACard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  title:{
    justifyContent:'center',
    textAlign:'center',
  },
  card:{
    width:Dimensions.get('window').width / 1.2,
    alignItems:'center',
    justifyContent:'center',
    padding:30,
    marginTop:15,
  },
  btn:{
    backgroundColor:'white'
  }
});