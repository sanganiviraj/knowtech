import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore'
import { FlatList } from 'react-native-gesture-handler';
import { windowWidth } from '../constant/extra';
import { Image } from 'react-native-animatable';

const Paidcourse = ({navigation}) => {
    const [item,setitem] = useState([]);

  useEffect(() => {
    getitem()
  },[])

  const getitem = () => {
    firestore()
    .collection('Courses')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      let tempdata = [];

      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

        tempdata.push({id:documentSnapshot.id,data:documentSnapshot.data()})
      });
      setitem(tempdata)
  });
}


  console.log('====================================');
  console.log(item);
  console.log('====================================');


  const freeProducts = item.filter(item => item.data.Prc !== 0);
  console.log("+++++++++++++++++++++++++++++++++")
  console.log(freeProducts)

  return (
    <View style={styles.screen}>
    
    <FlatList
    data={freeProducts}
    keyExtractor={item => item.id}
    renderItem={({item}) =>{
        return(
        <TouchableOpacity onPress={() => { navigation.navigate('paidcoursepage',{pdata:item.data}) }} activeOpacity={0.8}>
        <View style={styles.box}>
            <Image style={styles.img} source={{uri : item.data.img}}/>
            <View style={{height:50,width:(windowWidth*90/100),flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{height:50,justifyContent:'space-around',marginLeft:10}}>
                        <Text style={{fontSize:20,fontFamily:"Roboto-Bold",color:'black',}}>
                        {item.data.name}
                    </Text>

                    <Text numberOfLines={2} style={{fontSize:16,fontFamily:"Roboto-Medium",color:'#274971',}}>
                        {item.data.desc}
                    </Text>
                </View>   

                <Text style={{fontSize:22,fontFamily:"Roboto-Bold",color:'#274971',alignSelf:"flex-end"}}>
                ₹{item.data.Prc}
                </Text>            
            </View>   
        </View>
        </TouchableOpacity>
        )
    }}
    />

    </View>
  )
}

export default Paidcourse

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    box:{
        width:(windowWidth*95)/100,
        height:250,
        borderRadius:10,
        elevation:3,
        backgroundColor:'white',
        alignSelf:'center',
        marginVertical:10
    },
    img:{
        width:(windowWidth*93)/100,
        margin:3,
        height:170,
        borderRadius:10
    }
})