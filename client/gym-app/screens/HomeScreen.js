
import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'
import ACard from '../components/ACard'

import axios from '../API/axios'

import {colors} from '../assets/colors'

export default function HomeScreen({ navigation }) {

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
  if((lastWeight.percentage - 100) > 0 ){
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
      <AText style={[styles.title, {marginTop:10}]} regularTitle={true} text={'Best Weight Lifted'} />
        <ACard style={styles.card}> 
          <View>
            <AText style={styles.text} text={`Best Weight: ${lastWeight.best_weight_weight}`} />
            <AText style={styles.text} text={` Volume: ${lastWeight.best_weight_volume}`} />
          </View>
          <View>
            <AText style={[styles.text, percentageStyle]} text={`${lastWeight.percentage -100}%`} />
          </View>
        </ACard>
      <View style={styles.bottomNavbarContainer}>
        <TouchableOpacity style={styles.navbarButtons} onPress={() => navigation.navigate('Create Weight')}>
          <Image style={styles.img} source={require('../assets/images/plus.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButtons} onPress={() => navigation.navigate('Create Calories')}>
          <Image style={styles.img} source={require('../assets/images/calculator.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButtons} onPress={() => navigation.navigate('Leaderboard')}>
          <Image style={styles.img} source={require('../assets/images/leaderboard.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButtons} onPress={() => navigation.navigate('History')}>
          <Image style={styles.img} source={require('../assets/images/history.png')} />
        </TouchableOpacity>
      </View>
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
  goto:{
    backgroundColor:colors.secondary,
    borderRadius:15,
    padding:10,

  },
  gotoContainer:{
    borderRadius:15,
  },
  bottomNavbarContainer:{
    position:'absolute',
    flexDirection:'row',
    bottom:10,
    backgroundColor:colors.secondary,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    width: Dimensions.get('window').width,
    alignSelf:'center'
  },
  navbarButtons:{
    width:'23%',
    backgroundColor:'none',
    alignItems:'center'
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
    width:Dimensions.get('window').width / 1.2,
    alignItems:'center',
    justifyContent:'center',
    padding:30,
    marginTop:15,
  },
  img:{
    width:40,
    height:40
  }
});