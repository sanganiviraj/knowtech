import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-animatable';
import { windowWidth } from '../constant/extra';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {Transition,Transitioning} from 'react-native-reanimated'
// import { Icon } from 'react-native-elements';
import Icon, { Icons } from '../constant/Icons';



const Resourcepage = ({route}) => {
    const rsdata= route.params;
    const [currentindex,setcurrentindex] = useState(null)
    console.log('====================================');
    console.log(rsdata);
    console.log('====================================');
  return (

    <ScrollView>
    <View style={styles.screen}> 

     <Image style={{margin:10,width:(windowWidth*95)/100,height:300,borderRadius:10}} source={{uri: rsdata.rsdata.url}}/>

     <View style={{width:(windowWidth*95)/100,alignSelf:'center',paddingVertical:10}}>
     <Text style={{fontSize:24,color:'black',fontFamily:'Nunito-Bold',marginBottom:5}}>{rsdata.rsdata.name} </Text>
     <Text style={{fontSize:18,color:'#0C3D9A',fontFamily:'Nunito-semiBold'}}>{rsdata.rsdata.desc} </Text>
     </View>

     <View style={{paddingHorizontal:10,paddingVertical:10,elevation:5,backgroundColor:'white',position:'absolute',top:280,borderRadius:10,left:30}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Icon type={Icons.Entypo} name="user" color='#0C3D9A' size={24} />
            <Text style={{fontSize:18,color:'#0C3D9A',fontFamily:'Nunito-Bold',marginLeft:10}}>{rsdata.rsdata.auth} </Text>
        </View>
     </View>
    
        {
            rsdata.rsdata.content.map((item,index)=>{
                return( 
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setcurrentindex(index === currentindex ? null : index)}}>
                    <View style={styles.box}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                        <Text style={{fontSize:20,color:'black',fontFamily:'Roboto-Bold'}}>
                            {item.category}
                        </Text>

                        {index==currentindex ? <Icon type={Icons.AntDesign} name="up" size={26} color="black" /> :
                        <Icon type={Icons.AntDesign} name="down" size={26} color="black" />
                        }

                        </View>

                        {index == currentindex && <View>
                        {item.subcategory.map((subc) =>{
                            return(
                                <Text style={{fontSize:17,color:'black',fontFamily:'Roboto-Regular',paddingVertical:5,textAlign:'left'}}>{subc}
                                </Text>
                            )
                        })
                        }
                        </View>}


                    </View>
                    </TouchableOpacity>
                )
            })
        }
    </View>
    </ScrollView>
  )
}

export default Resourcepage

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    },
    box:{
    width:(windowWidth*95)/100,
    // height:60,
    paddingVertical:10,
    borderRadius:10,
    backgroundColor:"#ADD1FA",
    marginVertical:8,
    alignSelf:'center',
    justifyContent:'center',
    paddingLeft:10
    }
})