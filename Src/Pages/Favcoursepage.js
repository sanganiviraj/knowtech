import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';
import { Icons } from '../constant/Icons';
import { ActivityIndicator } from 'react-native-paper';

const Favcoursepage = () => {
    const coursedata = useSelector(state => state.favreducer.favoritedata);
    const [courseitem,setcourseitem] = useState([]);
    const [loading,setloading]=useState(true);
    const [items,setitems]=useState([]);
    console.log('====================================');
    console.log(coursedata);
    console.log('====================================');

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
            // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            tempdata.push({id:documentSnapshot.id,data:documentSnapshot.data()})
          });
          setcourseitem(tempdata)
          console.log('enter');
        //   fun()
        //   setloading(false)
      });
    }

    // const fun = () => {
    //     setitems( coursedata.map((index) =>courseitem[index]))
    //     console.log(items);
    //     console.log('====================================');
    //     console.log('exit');
    //     console.log('====================================');
    //     setloading(true)
    // }

    // setitems( coursedata.map((index) =>courseitem[index]))
    
    
    
  return (
    <View style={styles.screen}>
    <View style={{flex:1,alignItems:'center'}}>
                <FlatList 
                data={items}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                return(
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {}}>
                    <View style={styles.pack}>
                        <Image style={styles.packimg} source={{uri : item.data.img}}/>
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
    </View>
  )
}

export default Favcoursepage

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    }
})