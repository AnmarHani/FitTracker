import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Dimensions, Keyboard } from 'react-native';

import AInput from '../components/AInput';
import AButton from '../components/AButton';
import AText from '../components/AText';
import ACard from '../components/ACard';

import axios from '../API/axios';

import { colors } from '../assets/colors';

export default function CaloriesHistoryScreen({ navigation }) {
  const [calories, setCalories] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('api/CaloriesIndex/');
      if (response) {
        setCalories(response.data.Data);
      }
    }
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {calories.length > 0 && calories.reverse() ? (
          calories.map((calorie) => (
            <TouchableOpacity
              key={calorie.id}
              style={styles.cardContainer}
              onPress={() =>
                navigation.navigate('One Calorie', { calorie: calorie })
              }>
              <ACard style={styles.card}>
                <View>
                  <AText style={[styles.text]} text={'Calories'} />
                  <AText style={[styles.text]} text={calorie.calories} />
                </View>
                <View>
                  <AText style={[styles.text]} text={'Date'} />
                  <AText style={[styles.text]} text={calorie.created_at} />
                </View>
              </ACard>
            </TouchableOpacity>
          ))
        ) : (
          <AText text={'You Did not Calculate Any Calories Yet'} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20
  },
  cardContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom:15
  },
  text: {
    color: colors.secondaryFont,
    fontSize: 15,
    margin: 5,
  },
  card: {
    width: Dimensions.get('window').width / 1.2,
    flexDirection: 'row',
  },
});
