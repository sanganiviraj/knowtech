import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Bookarray } from '../Array/Bookarray'
import { windowWidth } from '../constant/extra'
import { Image } from 'react-native-animatable'

const Bookscreen = () => {

  return (
    <View style={styles.screen}>
        <FlatList 
        data={Bookarray}
        numColumns={2}
        renderItem={({item}) =>{
          return(
           <View style={styles.box}>
           
              <View style={styles.minibox}>
                 
              </View> 
              <Image style={styles.img} source={{uri: item.url}}/>
           </View> 
            
          )
        }}
        />
    </View>
  )
}

export default Bookscreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:"white",
    alignItems:'center'
  },
  box:{
    backgroundColor:"white",
    width:(windowWidth*45)/100,
    height:200,
    borderRadius:10,
    alignSelf:'center',
    marginHorizontal:10,
    marginVertical:10
  },
  minibox:{
    backgroundColor:"#ffd6ff",
    width:(windowWidth*45)/100,
    height:150,
    borderRadius:10,
    marginTop:50
  },
  img:{
    width:(windowWidth*35)/100,
    height:20 0,
    position:'absolute',
    alignSelf:'center'
    
    
  }
})