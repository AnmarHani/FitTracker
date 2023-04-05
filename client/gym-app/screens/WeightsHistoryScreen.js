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

export default function WeightsHistoryScreen({ navigation }) {
  const [weights, setWeights] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('api/WeightsIndex/');
      if (response) {
        setWeights(response.data.Data);
        
      }
    }
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {weights.length > 0 && weights.reverse() ? (
          weights.map((weight) => (
            <TouchableOpacity
              key={weight.id}
              style={styles.cardContainer}
              onPress={() =>
                navigation.navigate('One Weight', { weight: weight })
              }>
              <ACard style={styles.card}>
                <View>
                  <AText style={[styles.text]} text={'Weight'} />
                  <AText style={[styles.text]} text={weight.weight} />
                </View>
                <View>
                  <AText style={[styles.text]} text={'Total Volume'} />
                  <AText style={[styles.text]} text={weight.volume} />
                </View>
                <View>
                  <AText style={[styles.text]} text={'Name'} />
                  <AText style={[styles.text]} text={weight.exe_name} />
                </View>
              </ACard>
            </TouchableOpacity>
          ))
        ) : (
          <AText text={'You Did not Create Any Exercise Yet'} />
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
