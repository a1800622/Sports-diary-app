import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { SQLite } from 'expo-sqlite';

/**
 * 
 * Diary that shows your saved notes based on the topic you saved (Brazilian Jiu-Jitu).
 */
const dbBJJ = SQLite.openDatabase('diaryBJJ.db');

export default function DiaryBJJ() {

  navigationOptions = { title: 'BJJ', };

  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [moves, setMoves] = useState('');
  const [entry, setEntry] = useState([]);


  useEffect(() => {
    dbBJJ.transaction(tx => {
      tx.executeSql('create table if not exists diaryBJJ (id integer primary key not null, topic text, notes text, moves text);');
    }, null, updateListBJJ);
  }, []);

  const updateListBJJ = () => {
    dbBJJ.transaction(tx => {
      tx.executeSql('select * from diaryBJJ;', [], (_, { rows }) =>
        setEntry(rows._array)
      );
    });
  }

  const deleteDiaryBJJ = (id) => {
    console.log("Deleting id: " + id + " from DiaryBJJ");
    dbBJJ.transaction(
      tx => {
        tx.executeSql('delete from diaryBJJ where id = ?;', [id]);
      }, null, updateListBJJ
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
      <Text style={{ marginTop: 30, fontSize: 20 }}>Entries:</Text>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            style={{ marginLeft: "5%" }}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
              <View style={styles.listcontainer}>
                <Text style={{ fontSize: 22 }}>{item.topic}:</Text>
                <Text style={{ fontSize: 16 }}>{item.notes}</Text>
                <Text style={{ fontSize: 15 }}>({item.moves})</Text>
                <Text style={{ fontSize: 18, color: '#ff4545' }} onPress={() => deleteDiaryBJJ(item.id)}>Delete</Text>
              </View>}
            data={entry}
            ItemSeparatorComponent={listSeparator}
          />
        </View>
      </ScrollView>

    </View>
  );
}

DiaryBJJ.navigationOptions = ({ navigate }) => ({ title: 'Brazilian jiu-jitsu' });


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
