import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { windowWidth } from '../constant/extra'
import Icon, { Icons } from '../constant/Icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Freecourses, PupularCourses, resourcesdata } from '../Array/Coursearray'
// import { Image } from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore';
import { useDispatch,useSelector } from 'react-redux'
import { ADD_FAV, Delete_fav, Update_fav, Update_favorite } from '../Redux/Actions'
import { ActivityIndicator } from 'react-native-paper'


const Mainscreen = ({navigation}) => {
  const [selectedButton,setslectebutton]=useState();
  const [bookitem,setbookitem]=useState([]);
  const [courseitem,setcourseitem] = useState([]);
  const [removefav,setremovefav]=useState([]);
  const [items,setitems]=useState([]);
  const [loading,setloading]=useState(false);
  const dispatch = useDispatch();

  const coursedata = useSelector(state => state.favreducer.favoritedata);
  

  useEffect(() => {
    getitem()
    getbookitem()
  },[])

  const getitem = () => {
    firestore()
    .collection('Courses')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      let tempdata = [];

      querySnapshot.forEach(documentSnapshot => {
        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

        tempdata.push({id:documentSnapshot.id,data:documentSnapshot.data()})
      });
      setcourseitem(tempdata)
  });
}

const getbookitem = () => {
  setloading(true)
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
    setloading(false)
});
}


  const Additem = (index) =>{
    console.log('************')
    console.log(coursedata);
    
    if(!removefav.includes(index)) {
   
      removefav.push(index)
      
    }else{
      console.log(index)
      console.log('delete')
      removefav.splice(index,1)
     
    }

    console.log('%%%%%%%%')
    console.log(removefav);
    dispatch(Update_favorite(removefav))

    setitems(coursedata.map((index) =>courseitem[index]))

    
  }
    // console.log('++++++++++++++++++++++++++++++++++++');
    // console.log(coursedata);
    // console.log('====================================');

    // const items = coursedata.map((index) =>courseitem[index])
    // console.log(items)



    // console.log("Bookitem ",booitem);
  return (
    <ScrollView>
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

                <Text style={[styles.title,{color:"#884CE9"}]}> Resource  </Text>
            </View>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>

            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:  '#ECC2C2',borderRadius:10}} onPress={()=>{navigation.navigate('favcoursepage')}}>
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
 
        </View>
      </View>

        <View style={{height:260}}>

        <FlatList 
        data={courseitem.slice(0,6)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
          // console.log(item);
          return(
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
            <View style={styles.pack}>
             
                <Image style={styles.packimg} source={{uri:item.data.img}}/>
                <Text style={{fontSize:18,fontWeight:'600',color:'black',marginTop:10}}>{item.data.name} </Text>
                <Text numberOfLines={2} style={{fontSize:14,fontWeight:'600',color:'#274971',marginTop:5}}>{item.data.desc} </Text>
                
                
                
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                { 
                  item.data.Prc !== 0 ? <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>{item.data.Prc} <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',}}>{typeof item.price === 'number' ? "₹" : ''}</Text></Text> :
                    <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>Free</Text>
                }

                <TouchableOpacity onPress={() => Additem(index)}>
                <Icon type={Icons.MaterialIcons} name="favorite-outline" size={30} color="black" />
                </TouchableOpacity>
                
                </View>

            </View> 
            </TouchableOpacity>
          )
        }}
        />
        </View>

      

        <View style={[styles.box,{backgroundColor:"white",marginBottom:-10}]}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <Text style={{fontSize:24,fontFamily:'Nunito-Bold',color:"black"}}> Books </Text>
          </View>
        </View>

        {loading==true ? <FlatList 
          data={bookitem.slice(0,5)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) =>{
            return(
            <TouchableOpacity onPress={() => {navigation.navigate('bookpage',{bdata : item})}}>
              <Image 
              style={{height:200,width:140,borderRadius:2,marginHorizontal:10,marginVertical:10}}
              resizeMode='contain'
              source={{uri : item.data.img}}
              />
            </TouchableOpacity>
            )
          }}
          /> : <ActivityIndicator></ActivityIndicator>}

      <View style={[styles.box,{backgroundColor:"white",marginBottom:-10}]}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{fontSize:24,fontFamily:'Nunito-Bold',color:"black"}}> Favorite Courses </Text>
        </View>
      </View>
      
     <View style={{height:260}}>

       <FlatList 
        data={items.slice(0,8)}
        horizontal
        renderItem={({item,index})=>{
          // console.log(item);
          return(
            <TouchableOpacity onPress={() => {}}>
            <View style={styles.pack}>
                <Image style={styles.packimg} source={{uri:item.data.img}}/>
                <Text style={{fontSize:18,fontWeight:'600',color:'black',marginTop:10}}>{item.data.name} </Text>
                <Text numberOfLines={2} style={{fontSize:14,fontWeight:'600',color:'#274971',marginTop:5}}>{item.data.desc} </Text>

                
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                { 
                  item.data.Prc !== 0 ? <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>{item.data.Prc} <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',}}>{typeof item.price === 'number' ? "₹" : ''}</Text></Text> :
                    <Text style={{fontSize:24,fontWeight:'800',color:'#0C3D9A',marginTop:10}}>Free</Text>
                }

                <TouchableOpacity onPress={() => Additem(index)}>
                <Icon type={Icons.MaterialIcons} name="favorite-outline" size={30} color="black" />
                </TouchableOpacity>
                </View>

            </View> 
            </TouchableOpacity>
          )
        }}
        />
        </View> 
        
        

        <View style={{height:100}}/>

    </View>
    </ScrollView>

    
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