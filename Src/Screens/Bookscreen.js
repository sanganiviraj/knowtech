import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Bookarray } from '../Array/Bookarray'
import { windowWidth } from '../constant/extra'
import { Image } from 'react-native-animatable'
import firestore from '@react-native-firebase/firestore';


const Bookscreen = ({navigation}) => {
  const [bookitem,setbookitem]=useState();
  const [loading,setloading]= useState(true);

  useEffect(() => {
    getitem()
  },[])

  const getitem = () => {
    setloading(false)
    firestore()
    .collection('Books')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      let tempdata = [];

      querySnapshot.forEach(documentSnapshot => {
        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

        tempdata.push({id:documentSnapshot.id,data:documentSnapshot.data()})
      });
      setbookitem(tempdata)
      setloading(true);
  });
  }

  console.log("bookitem :",bookitem);

  return (
    <View style={styles.screen}>
        {loading == true ? <FlatList 
        data={bookitem}
        numColumns={2}
        onEndReached={()=>{<View style={{height:50}}/>}}
        renderItem={({item}) =>{
          console.log("item : ",item);
          return(
            <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('bookpage',{bdata : item})}}>
           <View style={styles.box}>
           
              <View style={styles.minibox}>
              <Text style={{fontSize:17,fontFamily:"Roboto-Bold",textAlign:'center',color:'black',marginBottom:5,}}> {item.data.name}</Text>
              </View> 
           
              <Image style={styles.img} source={{uri: item.data.img}} resizeMode='contain'/>
        
              
           </View> 
           </TouchableOpacity>
          )
        }}
        /> : <></>}
        
        
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
    height:180,
    position:'absolute',
    alignSelf:'center',
    borderRadius:5,
    
    
    
  },
  
})