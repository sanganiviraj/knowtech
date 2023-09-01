import React, {useState,useRef} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { windowWidth } from '../constant/extra';

const Maintodo = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const panelRef = useRef(null);
  
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
        {/* Added this scroll view to enable scrolling when list gets longer than the page */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
  
        {/* Today's Tasks */}
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
          
        </ScrollView>
  
        {/* Write a task */}
        {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
        {/* <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView> */}

        <View style={{bottom:100,alignItems:'flex-end',marginRight:30}}>
        <TouchableOpacity onPress={() => panelRef.current.togglePanel()} activeOpacity={0.7}>
            <View style={styles.togglebutton}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <BottomSheet ref={ref => panelRef.current = ref}   
        // innerContentStyle={{backgroundColor:"#E7F2FF",width:windowWidth,marginLeft:-20}} 
        >
            <Text style={{alignSelf:'center',fontSize:24,fontFamily:'Nunito-Bold',color:'black'}}> Add Your Task </Text>

            <View style={{marginTop:-20,flexDirection:'row',justifyContent:'space-around',height:200}}>
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} placeholderTextColor='#2D2C2C' />
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
            </View>
           
            
      </BottomSheet>
        
      </View>
    );
        }


export default Maintodo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      tasksWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
        //color:'black'
      },
      sectionTitle: {
        fontSize: 40,
        fontFamily:'Dongle-Bold',
        color:'black'
      },
      items: {
        marginTop: 30,
        color:'black'
      },
      writeTaskWrapper: {
        // width:( windowWidth*90)/100,
        // width:windowWidth,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        color:'black',
        height:150,
        
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#E9F3FF',
        borderRadius: 10,
        width: (windowWidth*70)/100,
        color:'black',
        elevation:2,
        fontSize:18,
        color:'black',
        height:60,
        marginTop:40
        
        // marginBottom:-30,
        
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#286CF0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:3,
        marginTop:40
    
      },
      togglebutton:{
        width: 60,
        height: 60,
        backgroundColor: '#286CF0',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
        marginTop:30
      },
      addText: {
        color:'white',
        fontSize:35
      },
})