import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//component imorts
import Task from "./components/Task"

export default function App() {
  return (
    <View style={styles.container}>

    <View style = {styles.taskWrapper}>
      <Text style = {styles.sectionTitle}>Today's tasks</Text>

      <View style ={styles.Items}>
        {/*This is where the tasks will go */}
        <Task text = "Task 1"/>
        <Task text = "Task 2"/>
      </View>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',
  },
  Items:{
    marginTop:30,
  },
});
