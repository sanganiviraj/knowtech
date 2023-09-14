import React from "react";
import { StyleSheet, Text ,ScrollView,Image,View,TouchableOpacity, Linking } from "react-native";
import { windowHeight, windowWidth } from "../constant/extra";
import Icon, { Icons } from "../constant/Icons";

const Popularcoursepage = ({route}) =>{
  const {pdata} = route.params
  console.log(pdata);

    return(
        <View style={styles.screen}>
     
        <Image style={{width:windowWidth,height:300}} source={{uri : pdata.data.img}}/>
     
         <View style={styles.box}>
           
         <ScrollView >
           <View style={{flexDirection:'row',alignItems:'center',width:(windowWidth*97)/100}}>
             <Icon type={Icons.MaterialCommunityIcons} name="star-three-points" color="#286CF0" size={30} style={{marginTop:3}}/>
             <Text style={{fontSize:30,fontFamily:'Roboto-Bold',color:'black'}}> {pdata.data.name} </Text>
           </View> 
   
           <Text style={{fontSize:22,fontFamily:'Roboto-SemiBold',color:'black',marginVertical:10}}>{pdata.data.desc} </Text> 
   
           <View style={{flexDirection:'row'}}>
             <Icon type={Icons.MaterialCommunityIcons} name="star-three-points" color="#286CF0" size={22} style={{marginTop:13,margin:5}}/>
   
             <Text style={{fontSize:18,fontFamily:'Nunito-Regular',color:'#0C3D9A',marginVertical:10,width:(windowWidth*85)/100,textAlign:'justify'}}>{pdata.data.det} </Text> 
           </View> 
           
           <View style={styles.minibox}>
               <Icon type={Icons.Ionicons} name="time-outline" color="white" size={22} style={{marginRight:5}}/>
               <Text style={{fontSize:18,fontFamily:'Roboto-SemiBold',color:'white',marginVertical:10}}>{pdata.data.tm} </Text> 
           </View>
   
           {pdata.data.Prc!==0 ? <Text style={{fontSize:30,fontFamily:'Roboto-Bold',color:'#0C3D9A',marginVertical:10}}>₹{pdata.data.Prc} </Text> : <Text style={{fontSize:30,fontFamily:'Roboto-Bold',color:'#0C3D9A',marginVertical:10}}>Free</Text>}
   
           {pdata.data.Prc!==0 ? <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
             <View style={{width:(windowWidth*90)/100,alignSelf:'center',height:50,borderRadius:10,backgroundColor:"#1F4EA9",justifyContent:"center",alignItems:"center",marginVertical:20}}> 
                 <Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Buy  </Text>
             </View>
           </TouchableOpacity> :
                <TouchableOpacity activeOpacity={0.3} onPress={() => {Linking.openURL(pdata.data.url)}}>
                <View style={{width:(windowWidth*90)/100,alignSelf:'center',height:50,borderRadius:10,backgroundColor:"#1F4EA9",justifyContent:"center",alignItems:"center",marginVertical:20}}> 
                    <Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Download Now  </Text>
                </View>
              </TouchableOpacity>
           }
   
           
   
           </ScrollView>
           
         </View>
         
        
         
       </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
      },
      box:{
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        elevation:5,
        position:'absolute',
        height:(windowHeight*60)/100,
        width:windowWidth,
        backgroundColor:'white',
        bottom:0,
        paddingHorizontal:10,
        paddingVertical:10
      },
      minibox:{
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:12,
        backgroundColor:"#286CF0",
        // justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
      }
})

export default Popularcoursepage