import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../constant/extra'
import { Image } from 'react-native-animatable'
import Icon, { Icons } from '../constant/Icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profilescreen = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground 
        style={{width:windowWidth,height:(windowHeight*35/100),alignSelf:'center'}}
        blurRadius={10}
        source={{uri:"https://www.opindia.com/wp-content/uploads/2023/01/srk.jpg"}}
      />
      <Image
        style={{width:100,height:100,borderRadius:100,alignSelf:'center',position:'absolute',top:(windowHeight*30)/100,}}
        source={{uri:"https://www.opindia.com/wp-content/uploads/2023/01/srk.jpg"}}
      />
      <Text style={{fontSize:24,fontFamily:'Roboto-Bold',color:'black',marginTop:70,alignSelf:'center'}}> Shah Rukh Khan </Text>
      <Text style={{fontSize:20,fontFamily:'Roboto-SemiBold',color:'black',alignSelf:'center',marginBottom:10}}> srk@gmail.com </Text>

      <View style={styles.box}>
        <Icon type={Icons.Ionicons} name="call" size={24} color="#0C3D9A"/>
        <Text style={{fontSize:24,fontFamily:'Roboto-Bold',color:'#0C3D9A',alignSelf:'center',marginHorizontal:30}}>+91 8128800324 </Text>
      </View>

      <View style={styles.box}>
        <Icon type={Icons.MaterialIcons} name="favorite" size={24} color="#853451"/>
        <Text style={{fontSize:24,fontFamily:'Roboto-Bold',color:'#853451',alignSelf:'center',marginHorizontal:80}}> Favorite </Text>
      </View>

      <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
      <View style={[styles.box,{marginTop:50}]}>
        <Icon type={Icons.Entypo} name="log-out" size={24} color="black"/>
        <Text style={{fontSize:24,fontFamily:'Roboto-Bold',color:'black',alignSelf:'center',marginHorizontal:30}}> Logout </Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Profilescreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'#E7F2FF'
  },
  pack:{
    width:(windowWidth*50)/100,
    height:250,
    borderRadius:10,
    backgroundColor:"#E7F2FF",
    marginHorizontal:10,
    marginVertical:10,
    padding:10
  },
  packimg:{
    width:(windowWidth*45)/100,
    height:100,
    borderRadius:10,
    alignSelf:'center'
  },
  box:{
    flexDirection:'row',
    alignSelf:'center',
    width:(windowWidth*90)/100,
    height:50,
    backgroundColor:'white',
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center'
  }
})