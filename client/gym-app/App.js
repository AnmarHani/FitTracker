import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import {colors} from './assets/colors'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen'

import CreateWeightScreen from './screens/CreateWeightScreen'
import CreateCaloriesScreen from './screens/CreateCaloriesScreen'

import WeightsHistoryScreen from './screens/WeightsHistoryScreen'
import CaloriesHistoryScreen from './screens/CaloriesHistoryScreen'

import OneWeightScreen from './screens/OneWeightScreen'
import OneCalorieScreen from './screens/OneCalorieScreen'

import LeaderboardScreen from './screens/LeaderboardScreen'

import HistoryScreen from './screens/HistoryScreen'

import AppLoading from 'expo-app-loading';


const Stack = createNativeStackNavigator();


export default function App() {
let [fontsLoaded] = useFonts({
    'regular-font':require("./assets/fonts/Comfortaa-Regular.ttf"),
    'bold-font':require("./assets/fonts/Comfortaa-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
            contentStyle:{
              backgroundColor:colors.background,
              alignItems:'center',
              justifyContent:'center',
            },
            animation:'slide_from_right',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.secondary,
            },
            headerTintColor: colors.font,
            headerTitleStyle: {
              fontSize:17,
              fontWeight: 'bold',
              fontFamily:'regular-font',
            },
        }}>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
          
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen options={{title: 'Create Exercise'}} name="Create Weight" component={CreateWeightScreen} />
          <Stack.Screen options={{title: 'Calculate Calories'}} name="Create Calories" component={CreateCaloriesScreen} />

          <Stack.Screen options={{title: 'Exercises History'}} name="Weights History" component={WeightsHistoryScreen} />
          <Stack.Screen options={{title: 'Calories History'}} name="Calories History" component={CaloriesHistoryScreen} />

          <Stack.Screen options={{title: 'Exercise Detail'}} name="One Weight" component={OneWeightScreen} />
          <Stack.Screen options={{title: 'Calories Detail'}} name="One Calorie" component={OneCalorieScreen} />

          <Stack.Screen options={{title: 'Leaderboard'}} name="Leaderboard" component={LeaderboardScreen} />

          <Stack.Screen options={{title: 'History'}} name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
});


