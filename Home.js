import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {

  navigationOptions = {title: 'Homepage',};
  const{navigate} = props.navigation;

   return (
     <View style={styles.container}>
       <View style={styles.container}>
         <Text style={{fontSize: 30}}>Sports Diary</Text>
       </View>

       <View style={styles.buttoncontainer}>
        <Button onPress={() => navigate('Entry')} title="Enter a new day" />
        <Button onPress={() => navigate('Kickboxing')} color="#000000" title= "Kickboxing" />
        <Button onPress={() => navigate('BJJ')} color="#000000" title= "Brazilian Jiu-Jitsu" />
        <Button onPress={() => navigate('RPCalc')} title= "Running Pace" />
       </View>

     </View>
    );
  };
  Home.navigationOptions = ({navigate}) => ({title: ''});

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#adadad',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttoncontainer:{
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: 150,
    }
  });
