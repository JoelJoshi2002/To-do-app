import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/task';

export default function App() {
  return (
<View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Task To Be Completed</Text>
      <View style={styles.items}>
        <Task text={'Task1'}/> 
        <Task text={'Task2'}/> 
      </View>
    </View>
    <View style={styles.add}>
      <Text style={{color: '#fff'}}>
        Add
      </Text>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28282B',
   
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    color: '#fff',
    fontSize :24,
    fontWeight: 'bold',
    
  },
  items: {
    marginTop: 30,
  },
  add: {
    width: 280,
    height:3,
    paddingTop:30,
    paddingBottom:10,
    marginTop:350,
    marginLeft:40,
    borderWidth: 2,
    borderRadius:  5,
    borderColor: '#fff',
    color: '#fff'
  }

});
