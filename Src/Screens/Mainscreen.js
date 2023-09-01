import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { windowWidth } from '../constant/extra'
import Icon, { Icons } from '../constant/Icons'
import { FlatList } from 'react-native-gesture-handler'
import { Freecourses, PupularCourses, resourcesdata } from '../Array/Coursearray'
import { Image } from 'react-native-animatable'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Mainscreen = ({navigation}) => {
  const [selectedButton,setslectebutton]=useState();

  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        {/* <Text style={{fontSize:24,fontWeight:'500',color:"black",marginTop:10}}> Category </Text> */}

        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:  '#ADD1FA',borderRadius:10}} 
            onPress={() => {navigation.navigate('paidCoures')}}
            >
            <View style={styles.catelog}>
                <View style={styles.minibox}>
                  <Icon type={Icons.MaterialIcons} name='attach-money' size={30} color='#286CF0'/>
                </View>

                <Text style={styles.title}> Paid   </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:  '#CCB9E5',borderRadius:10}} onPress={()=>{navigation.navigate('resources')}}>
            <View style={styles.catelog}>
                <View style={[styles.minibox,{backgroundColor: '#CCB9E5'}]}>
                  <Icon type={Icons.FontAwesome} name='list-ul' size={30} color='#884CE9'/>
                </View>

                <Text style={[styles.title,{color:"#884CE9"}]}> Resources  </Text>
            </View>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>

            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:  '#ECC2C2',borderRadius:10}}>
            <View style={styles.catelog}>
                <View style={[styles.minibox,{backgroundColor: '#ECC2C2'}]}>
                  <Icon type={Icons.FontAwesome5} name='fire' size={30} color='#DA3636'/>
                </View>

                <Text style={[styles.title,{color:"#DA3636"}]}> Trending  </Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:  '#A7CDA4',borderRadius:10}} onPress={() => {navigation.navigate('freecourses')}}>
            <View style={styles.catelog}>
                <View style={[styles.minibox,{backgroundColor: '#A7CDA4'}]}>
                  <Icon type={Icons.Ionicons} name='download' size={30} color='#356823'/>
                </View>

                <Text style={[styles.title,{color:"#356823"}]}> Free  </Text>
            </View>
            </TouchableOpacity>
           
        </View>
      </View>

      <View style={[styles.box,{backgroundColor:"white",marginBottom:-10}]}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{fontSize:24,fontWeight:'500',color:"black",fontFamily:'Nunito-Bold'}}> Popular Courses </Text>

          <TouchableOpacity activeOpacity={0.5} onPress={()=> {navigation.navigate('PopularScreen')}}>
          <Text style={{fontSize:20,fontFamily:'Nunito-Bold',color:"grey"}}> See all </Text>
          </TouchableOpacity>
        </View>
      </View>

        <View style={{height:260}}>
        <FlatList 
        data={resourcesdata.slice(0,5)}
        horizontal
        renderItem={({item})=>{
          console.log(item);
          return(
            <TouchableOpacity onPress={() => {navigation.navigate('resourcespage',{
              rsdata : item
            })}}>
            <View style={styles.pack}>
                <Image style={styles.packimg} source={{uri:item.url}}/>
                <Text style={{fontSize:18,fontWeight:'600',color:'black',marginTop:10}}>{item.course} </Text>
                <Text numberOfLines={2} style={{fontSize:14,fontWeight:'600',color:'#274971',marginTop:5}}>{item.descriptionOneLine} </Text>
                <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>{item.price} <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',}}>{typeof item.price === 'number' ? "₹" : ''}</Text></Text>
            </View> 
            </TouchableOpacity>
          )
        }}
        />
        </View>

      <View style={[styles.box,{backgroundColor:"white",marginBottom:-10}]}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{fontSize:24,fontFamily:'Nunito-Bold',color:"black"}}> Favorite Courses </Text>
        </View>
      </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'white',
  },
  box:{
    width:windowWidth,
    padding:10,
    backgroundColor:"#D9D9D9",
    alignSelf:'center'
  },
  container:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginVertical:10,
  },
  catelog:{
    width:(windowWidth*45)/100,
    borderRadius:10,
    height:60,
    backgroundColor:'white',
    flexDirection:'row',
    padding:5,
    alignItems:'center'
  },
  minibox:{
    width:50,
    height:50,
    borderRadius:12,
    backgroundColor:"#ADD1FA",
    padding:10
  },
  title:{
    fontSize:22,
    color:'#286CF0',
    fontFamily:'Roboto-Bold',
    marginLeft:2
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
  }
})

export default Mainscreen