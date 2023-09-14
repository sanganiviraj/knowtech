import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';
import { Icons } from '../constant/Icons';
import { ActivityIndicator } from 'react-native-paper';
import { windowWidth } from '../constant/extra';
import { ADD_FAV } from '../Redux/Actions';

const Favcoursepage = () => {
    const coursedata = useSelector(state => state.favreducer.favoritedata);
    const [courseitem,setcourseitem] = useState([]);
    const [loading,setloading]=useState(true);
    const [items,setitems]=useState([]);
    const dispatch=useDispatch();
    console.log('====================================');
    console.log(coursedata);
    console.log('====================================');


    
    

    const removeItem = (index) =>{
      console.log('************')
      var cData = coursedata;
      cData.splice(index,1)
      dispatch(ADD_FAV(cData))
    }
    
    
    
  return (
    <View style={styles.screen}>
    <View style={{flex:1,alignItems:'center'}}>
                <FlatList 
                data={coursedata}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                  console.log("item :" , item.data.img);
                return(
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {}}>
                    
                    <View style={styles.pack}>
                      <Image style={styles.packimg} source={{uri : item.data.img}}/>
                      <Text style={{fontSize:18,fontWeight:'600',color:'black',marginTop:10}}>{item.data.name} </Text>
                        <Text numberOfLines={2} style={{fontSize:14,fontWeight:'600',color:'#274971',marginTop:5}}>{item.data.desc} </Text>
                        {/* <Text style={{fontSize:20,fontWeight:'800',color:'#0C3D9A',marginTop:10,alignSelf:'flex-end'}}>{item.auth} </Text> */}
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                            { 
                              item.data.Prc !== 0 ? <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>₹{item.data.Prc} <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',}}>{typeof item.price === 'number' ? "₹" : ''}</Text></Text> :
                                <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>Free</Text>
                            }

                            <TouchableOpacity onPress={() => removeItem(item)}>
                            <Icon type={Icons.MaterialIcons} name="favorite-outline" size={30} color="black" />
                            </TouchableOpacity>
                            
                          </View>
                    </View>
                    </TouchableOpacity>
                    
                    )
                }}
                />
      </View> 
    </View>
    // <></>
  )
}

export default Favcoursepage

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    },
    pack:{
      width:(windowWidth*45)/100,
      height:250,
      paddingVertical:10,
      justifyContent:'space-around',
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