import React, {useState} from 'react';

import { StyleSheet, Text, View, SafeAreaViewComponent, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
<View style={styles.container}>
<View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    <KeyboardAvoidingView behavior={Platform.OS =="ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={'add the task...'} value ={task}  onChangeText={text=>setTask(text)}/>

      <TouchableOpacity onPress={ ()=> handleAddTask()}>
        <View  style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>

        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position:'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems:'center',  
    paddingLeft: 10,

    
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: '#FFFF',
    opacity:0.4,
    borderRadius:60,
    width: 250,

    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#ffff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4
  },
  addText: {
    color: '#fff'
  }
 
});
