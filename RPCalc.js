import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

/**
 * 
 * Screen youre you fill and calculate your running pace, for example jogging.
 */
export default function RPCalc() {

  navigationOptions = { title: 'RPCalc', };

  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [pace, setPace] = useState(0);

  const laskin = () => {
    const runningPace = parseFloat(time) / parseFloat(distance)

    setPace(runningPace);
  }

  return (

    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{ fontSize: 18 }}>Your running pace: </Text>
          <Text style={{ fontSize: 18, color: 'blue' }}>{pace.toFixed(1)} min/km</Text>
        </View>
        <TextInput
          placeholder=' Running time (minutes)'
          keyboardType="numeric"
          style={{ marginTop: 5, marginBottom: 5, fontSize: 18, width: 240, borderColor: 'black', borderWidth: 1, backgroundColor: '#fff' }}
          onChangeText={(time) => setTime(time)}
          value={String(time)}
        />
        <TextInput
          placeholder=' Running distance (km)'
          keyboardType="numeric"
          style={{ marginTop: 5, marginBottom: 5, fontSize: 18, width: 240, borderColor: 'black', borderWidth: 1, backgroundColor: '#fff' }}
          onChangeText={(distance) => setDistance(distance)}
          value={String(distance)}
        />
      </View>
      <View style={styles.buttoncontainer}>
        <Button onPress={laskin} title="Calculate Running Pace" />
      </View>
    </View>
  )

}

RPCalc.navigationOptions = ({ navigate }) => ({ title: 'Running Pace Calculator' });

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#adadad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 250,
  },

});
