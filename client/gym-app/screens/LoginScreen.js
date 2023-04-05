
import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'
import ACard from '../components/ACard'

import axios from '../API/axios'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')


  const loginHandler = async() => {
    // navigation.replace('Home')      
    data = {
      'username':username,
      'password':password
    }
    try{
      const response = await axios.post('Login/', data)
      axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`
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
          <AText style={styles.title} regularTitle={true} text={'Sign In With'}/>
          <AText style={styles.title} boldTitle={true} text={'FitTracker'}/>
          <AInput setState={setUsername} style={styles.input} placeholder={'Username'} />
          <AInput password={true} setState={setPassword} style={styles.input} placeholder={'Password'} />
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
              <AText  regularDescription={true} text={'Dont Have an Account?'} secondaryText={'Sign Up'} style={styles.navigateBtn}/>
            </TouchableOpacity>
            <AButton style={styles.title} text={'Sign in'} onPress={loginHandler} />
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
    marginVertical:50
  },
  bottomContainer:{
    marginTop: 40,
  }
});