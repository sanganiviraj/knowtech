import { StyleSheet, Text, View , FlatList ,Image } from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-gesture-handler'
import { PupularCourses } from '../Array/Coursearray'
import { windowWidth,windowHeight } from '../constant/extra'
// import { Image } from 'react-native-animatable'

const Popularscreen = () => {
  return (
    <View style={styles.screen}>
        <View style={{flex:1,alignItems:'center'}}>
            <FlatList 
            data={PupularCourses}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{
            return(
                <View style={styles.pack}>
                    <Image style={styles.packimg} source={{uri : item.imgurl}}/>
                    <Text style={{fontSize:18,fontWeight:'600',color:'black',marginTop:10}}>{item.course} </Text>
                    <Text numberOfLines={2} style={{fontSize:14,fontWeight:'600',color:'#274971',marginTop:5}}>{item.descriptionOneLine} </Text>
                    <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>{item.price} <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',}}>{typeof item.price === 'number' ? "₹" : ''}</Text></Text>
                </View>   
                )
            }}
            />
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"white"
    },
    pack:{
        width:(windowWidth*45)/100,
        height:250,
        borderRadius:10,
        backgroundColor:"#E7F2FF",
        marginHorizontal:5,
        marginVertical:10,
        padding:10,
        
      },
      packimg:{
        width:(windowWidth*40)/100,
        height:100,
        borderRadius:10,
        alignSelf:'center'
      }
})

export default Popularscreen