
import * as React from 'react';
import { Text, Image, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView  } from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput'
import AButton from '../components/AButton'
import AText from '../components/AText'

import ACard from '../components/ACard'

import axios from '../API/axios'

import {colors} from '../assets/colors'

export default function LeaderboardScreen({ navigation }) {

  const [users, setUsers] = React.useState([])
  const [volumes, setVolumes] = React.useState([])



  const usersdata = users.map((user, index) => {
    return { user: user, volumes: {...volumes[index]}}
  })

  React.useEffect(()=>{
    async function getData(){
      try{
          const response = await axios.get('api/leaderBoard/')
          setUsers(response.data.Data.user_data)
          setVolumes(response.data.Data.weight_data.reverse())
      }catch(err){
      alert("All Users Must Enter An Exercise, There is someone who didnt")
      }

    }
    getData() 

  },[])



  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
        {usersdata.length > 0 && usersdata.reverse() ? usersdata.map((userdata, index)=>(
          <ACard style={styles.card}> 
            <AText style={{color:'black', margin:6}} text={`${userdata.user.username}`} />
            <AText style={{color:'black'}} text={`${index}`} />
          </ACard>
        )):
        (
          <View>
            <AText text={'No users that deserve...'} />
            <AText text={'or maybe there is a glitch xD'} />
          </View>
        )
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
            // {userdata.volumes != undefined && <AText style={{color:'black'}} text={`Volume: ${userdata.volumes.volume}`} />}
            // <AText text={userdata.volumes} />

            // {users.length > 0 ? users.map((user)=>(
            //       <View key={user.id}>
            //         <AText style={[styles.text]} text={"Username"} />
            //         <AText style={[styles.text]} text={user.username} />
            //       </View>
            // )):
            // (
            //   <AText boldTitle={true} text={"No Users That Deserve Yet"} />
            // )
            // }
            // {volumes.length > 0 ? volumes.map((volume)=>(
            //     <View key={volume.id}>
            //       <AText style={[styles.text]} text={"Volume"} />
            //       <AText style={[styles.text]} text={volume.volume} />
            //     </View>
            // ))
            // :
            // (
            //   <AText boldTitle={true} text={"No Users That Deserve Yet"} />
            // )
            // }
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:30,
    marginTop:15,
  },
});
    // users.forEach((user, i) => content[user] = volumes[i])
    // for (const [key, value] of Object.entries(content)) {
    //   alert(key.username, value);
    // }
    // {combined.length > 0 && combined.map((one)=>(
    //   <ACard style={styles.card}> 
    //     <Text>Hello</Text>
    //   </ACard>
    // ))}