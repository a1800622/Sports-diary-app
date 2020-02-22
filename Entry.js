import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native';
import {SQLite} from 'expo-sqlite';

const dbKB = SQLite.openDatabase('diaryKB.db');
const dbBJJ = SQLite.openDatabase('diaryBJJ.db')

export default function Entry() {

  navigationOptions = {title: 'Entry',};

  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [moves, setMoves] = useState('');
  const [entry, setEntry] = useState([]);


  useEffect(() => {
    dbKB.transaction(tx => {
      tx.executeSql('create table if not exists diaryKB (id integer primary key not null, topic text, notes text, moves text);');
      }, null, updateListKB );
    dbBJJ.transaction(tx => {
      tx.executeSql('create table if not exists diaryBJJ (id integer primary key not null, topic text, notes text, moves text);');
      }, null, updateListBJJ );
    }, []);

const saveDiaryKB = () => {{
  dbKB.transaction(tx =>{
    tx.executeSql('insert into diaryKB (topic, notes, moves) values (?,?,?);', [topic, notes, moves]);
  }, null, updateListKB)
  console.log(topic);
  console.log(notes);
  console.log(moves);
}
{ Alert.alert('Entry saved to kickboxing diary'); }}

const saveDiaryBJJ = () => {{
  dbBJJ.transaction(tx =>{
    tx.executeSql('insert into diaryBJJ (topic, notes, moves) values (?,?,?);', [topic, notes, moves]);
  }, null, updateListBJJ)
  {/* Console logs are to make sure that  */}
  console.log(topic);
  console.log(notes);
  console.log(moves);
}
{ Alert.alert('Entry saved to BJJ diary'); }}


const updateListKB = () => {
  dbKB.transaction(tx => {
    tx.executeSql('select * from diaryKB;', [], (_, {rows}) =>
    setEntry(rows._array)
    );
});
}

const updateListBJJ = () => {
  dbBJJ.transaction(tx => {
    tx.executeSql('select * from diaryBJJ;', [], (_, {rows}) =>
    setEntry(rows._array)
    );
});
}

  return (
    <View style={styles.container}>
    <View>
      <TextInput placeholder=' Date or topic'
        style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'black', borderWidth: 1, backgroundColor:'#fff'}}
        onChangeText={(topic) => setTopic(topic)}
        value={topic}/>
      <TextInput placeholder=' Moves'
        style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'black', borderWidth: 1, backgroundColor:'#fff'}}
        onChangeText={(moves) => setMoves(moves)}
        value={moves}/>
      <TextInput placeholder=' Notes'
        multiline
        numberOfLines={5}
        style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'black', borderWidth: 1, backgroundColor:'#fff'}}
        onChangeText={(notes) => setNotes(notes)}
        value={notes}/>
    </View>
    <View style={styles.buttoncontainer}>
      <Button onPress={saveDiaryKB} title="Save to kickboxing" />
      <Button onPress={saveDiaryBJJ} title="Save to BJJ" />
    </View>
    </View>
  );
}

Entry.navigationOptions = ({navigate}) => ({title: 'How was your day?'});


const styles = StyleSheet.create({
 container: {
  flex: 2,
  backgroundColor: '#adadad',
  alignItems: 'center',
  justifyContent: 'center',
 },
 buttoncontainer:{
   flex: 1,
   alignItems: 'center',
   justifyContent: 'space-around',
   marginBottom: 250,
 }
});
