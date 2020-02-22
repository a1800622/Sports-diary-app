import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import {SQLite} from 'expo-sqlite';

const dbKB = SQLite.openDatabase('diaryKB.db');

export default function DiaryKB() {

  navigationOptions = {title: 'Kickboxing',};

  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [moves, setMoves] = useState('');
  const [entry, setEntry] = useState([]);

  useEffect(() => {
      dbKB.transaction(tx => {
        tx.executeSql('create table if not exists diaryKB (id integer primary key not null, topic text, notes text, moves text);');
    }, null, updateListKB );
  }, []);

const updateListKB = () => {
  dbKB.transaction(tx => {
    tx.executeSql('select * from diaryKB;', [], (_, {rows}) =>
    setEntry(rows._array)
    );
});
}

const deleteDiaryKB = (id) => {
  console.log("Deleting id: " + id + " from DiaryKB");
  dbKB.transaction(
    tx => {
      tx.executeSql('delete from diaryKB where id = ?;', [id]);
    }, null, updateListKB
  )
}


  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "100%",
          backgroundColor: "#dedede",

        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 30, fontSize: 20}}>Entries:</Text>
      <ScrollView>
      <View style={styles.container}>
      <FlatList
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
          <View style={styles.listcontainer}>
            <Text style={{fontSize: 22 }}>{item.topic}:</Text>
            <Text style={{fontSize: 16}}>{item.notes}</Text>
            <Text style={{fontSize: 15}}>({item.moves})</Text>
            <Text style={{fontSize: 18, color: '#ff4545'}} onPress={() => deleteDiaryKB(item.id)}>Delete</Text>
          </View>}
        data={entry}
        ItemSeparatorComponent={listSeparator}
      />
      </View>
      </ScrollView>

    </View>
  );
}

DiaryKB.navigationOptions = ({navigate}) => ({title: 'Kickboxing'});


const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#dedede',
  alignItems: 'center',
  justifyContent: 'center',
 },
 listcontainer: {
  flexWrap: 'wrap',
  backgroundColor: '#adadad',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
 }
});
