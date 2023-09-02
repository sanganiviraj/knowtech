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
              <Text style={{fontSize:17,fontFamily:"Roboto-Bold",textAlign:'center',color:'black',marginBottom:5}}> {item.name}</Text>
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
    height:220,
    borderRadius:10,
    alignSelf:'center',
    marginHorizontal:10,
    marginVertical:20,
    
  },
  minibox:{
    backgroundColor:"#b4d6ff",
    width:(windowWidth*45)/100,
    height:180,
    borderRadius:10,
    marginTop:50,
    justifyContent:'flex-end',
    
  },
  img:{
    width:(windowWidth*33)/100,
    height:190,
    position:'absolute',
    alignSelf:'center',
    borderRadius:5,
    
    
  },
  
})