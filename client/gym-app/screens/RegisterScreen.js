
import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'

import axios from '../API/axios'

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')


  const registerHandler = async() => {
    data = {
      'username':username,
      'password':password,
      'password2':confirmPassword,
    }
    try{
      const response = await axios.post('Register/', data)
      axios.defaults.headers.common['Authorization'] = `Token ${response.data.Token}`
      navigation.replace('Home')
    }catch(err){
      alert(err)
    }

  }

  if(axios.defaults.headers.common['Authorization']){
    navigation.replace('Home')
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <SafeAreaView style={styles.form}>
        <Image style={styles.img} source={require('../assets/images/Logo.png')} />
        <AText style={styles.title} regularTitle={true} text={'Get Started With'}/>
        <AText style={styles.title} boldTitle={true} text={'FitTracker'}/>
        <AInput setState={setUsername} style={styles.input} placeholder={'Username'} />
        <AInput password={true} setState={setPassword} style={styles.input} placeholder={'Password'} />
        <AInput password={true} setState={setConfirmPassword} style={styles.input} placeholder={'Confirm Password'} />
        <View style={styles.bottomContainer}>
          <AButton style={styles.title} text={'Sign Up'} onPress={registerHandler} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    flex:1,
  },
  navigateBtn: {
    margin:5,
    alignSelf:'center',
  },
  title:{
    alignSelf:'center',
    marginVertical:15
  },
  input:{
    marginVertical:15
  },
  img:{
    alignSelf:'center',
    marginVertical:20
  },
  bottomContainer:{
    marginVertical:10,
  }
});