import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Task = (props) => {
return(

    <View style={style.items}>
        <View style={style.itemText}>
            <View style ={style.square}></View>
            <Text style={style.itemTextstyle}> {props.text}</Text>

        </View>
    <View style={style.circular}></View>
    </View>
)


}
const style=StyleSheet.create({
    items  :{
        // backgroundColor :'#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#fff',
        borderWidth: 1


},
itemText :{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

},
square :{
    height:24,
    width: 24,
    backgroundColor: '#fff',
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15,
},
itemTextstyle :{
   maxWidth: '80%',
   color:'#fff',

},
circular :{
    width:15,
    height:15,
    borderWidth: 2,
    borderRadius:  10,
    marginLeft: '70%',
    backgroundColor: '#fff'
},

});

export default Task;