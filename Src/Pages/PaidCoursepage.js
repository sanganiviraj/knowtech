import { StyleSheet, Text, View,Image ,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../constant/extra';
import Icon, { Icons } from '../constant/Icons';

const PaidCoursepage = ({route}) => {
    const {pdata} = route.params;
    console.log('====================================');
    console.log(pdata.img);
    console.log('====================================');
  return (
    <View style={styles.screen}>
     
     <Image style={{width:windowWidth,height:300}} source={{uri : pdata.img}}/>

     
      <View style={styles.box}>
        
      <ScrollView >
        <View style={{flexDirection:'row',alignItems:'center',width:(windowWidth*97)/100}}>
          <Icon type={Icons.MaterialCommunityIcons} name="star-three-points" color="#286CF0" size={30} style={{marginTop:3}}/>
          <Text style={{fontSize:30,fontFamily:'Roboto-Bold',color:'black'}}> {pdata.name} </Text>
        </View> 

        <Text style={{fontSize:22,fontFamily:'Roboto-SemiBold',color:'black',marginVertical:10}}>{pdata.desc} </Text> 

        <View style={{flexDirection:'row'}}>
          <Icon type={Icons.MaterialCommunityIcons} name="star-three-points" color="#286CF0" size={22} style={{marginTop:13,margin:5}}/>

          <Text style={{fontSize:18,fontFamily:'Nunito-Regular',color:'#0C3D9A',marginVertical:10,width:(windowWidth*85)/100,textAlign:'justify'}}>{pdata.det} </Text> 
        </View> 
        
        <View style={styles.minibox}>
            <Icon type={Icons.Ionicons} name="time-outline" color="white" size={22} style={{marginRight:5}}/>
            <Text style={{fontSize:18,fontFamily:'Roboto-SemiBold',color:'white',marginVertical:10}}>{pdata.tm} </Text> 
        </View>

        <Text style={{fontSize:30,fontFamily:'Roboto-Bold',color:'#0C3D9A',marginVertical:10}}>₹{pdata.Prc} </Text> 

        <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
          <View style={{width:(windowWidth*90)/100,alignSelf:'center',height:50,borderRadius:10,backgroundColor:"#1F4EA9",justifyContent:"center",alignItems:"center",marginVertical:20}}> 
              <Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Buy  </Text>
          </View>
        </TouchableOpacity>

        

        </ScrollView>
        
      </View>
      
     
      
    </View>
  )
}

export default PaidCoursepage

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