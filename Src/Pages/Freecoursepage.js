import { StyleSheet, Text, View,Image ,TouchableOpacity,ScrollView,Linking,ToastAndroid} from 'react-native'
import React from 'react'
// import { Image } from 'react-native-animatable';
import { windowHeight, windowWidth } from '../constant/extra';
import Icon, { Icons } from '../constant/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAV } from '../Redux/Actions';
// import { ScrollView } from 'react-native-gesture-handler';


const Freecoursepage = ({route}) => {
  const {fdata}=route.params;
  console.log("fdata :" , fdata);
  console.log(fdata.data.Prc);
  const dispatch = useDispatch()
  const coursedata = useSelector(state => state.favreducer.favoritedata);

  const Additem = (item) =>{

    if(coursedata.includes(item)){
      ToastAndroid.show( "Already Added!", ToastAndroid.SHORT);
    }else{
      console.log('************')
      var cData = coursedata;
      cData.push(item)
      // console.log('1',cData)
      // setitems(cData)

      dispatch(ADD_FAV(cData))

      ToastAndroid.show( "Added To Favorite", ToastAndroid.SHORT);
    }
    
  }

  return (
    
    <View style={styles.screen}>
     
     <Image style={{width:windowWidth,height:300}} source={{uri : fdata.data.img}}/>

     
      <View style={styles.box}>
      <ScrollView >
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon type={Icons.MaterialCommunityIcons} name="star-three-points" color="#286CF0" size={30} style={{marginTop:3}}/>
          <Text style={{fontSize:30,fontFamily:'Roboto-Bold',color:'black'}}> {fdata.data.name} </Text>
        </View> 

        <Text style={{fontSize:22,fontFamily:'Roboto-SemiBold',color:'black',marginVertical:10}}>{fdata.data.desc} </Text> 

        <View style={{flexDirection:'row'}}>
          <Icon type={Icons.MaterialCommunityIcons} name="star-three-points" color="#286CF0" size={22} style={{marginTop:13,margin:5}}/>

          <Text style={{fontSize:18,fontFamily:'Nunito-Regular',color:'#0C3D9A',marginVertical:10,width:(windowWidth*85)/100,textAlign:'justify'}}>{fdata.data.det} </Text> 
        </View> 
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:10}}>
            <View style={styles.minibox}>
              <Icon type={Icons.Ionicons} name="time-outline" color="white" size={22} style={{marginRight:5}}/>
              <Text style={{fontSize:18,fontFamily:'Roboto-SemiBold',color:'white',marginVertical:10}}>{fdata.data.tm} </Text> 
            </View>

            <TouchableOpacity activeOpacity={0.4} onPress={() => {Additem(fdata)}}>
              <Icon type={Icons.MaterialIcons} name="favorite-outline" size={30} color="black" />
            </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.3} onPress={() => {Linking.openURL(fdata.data.url)}}>
          <View style={{width:(windowWidth*90)/100,alignSelf:'center',height:50,borderRadius:10,backgroundColor:"#1F4EA9",justifyContent:"center",alignItems:"center",marginVertical:20}}> 
              <Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Submit </Text>
          </View>
        </TouchableOpacity>

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

export default Freecoursepage
