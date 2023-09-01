import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
          </View>
          <View style={styles.circular}></View>
        </View>
      )
  
}
     

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
       // color:'black'
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
       // color:'black'
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#286CF0',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
        //color:'black'
      },
      itemText: {
        maxWidth: '80%',
        color:'black'
      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#286CF0',
        borderWidth: 2,
        borderRadius: 5,
        //color:'black'
      },
})

export default Task