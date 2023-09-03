import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { windowWidth } from '../../constant/extra';
import Icon, { Icons } from '../../constant/Icons';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

const Books = () => {
  const [bookname,setbookname]=useState('');
  const [bookdesc,setbookdesc]=useState('');
  const [bookdetail,setbookdetail]=useState('');
  const [bookurl,setbookurl] = useState('');
  const [bookimage,setbookimage]=useState(null);

  useEffect(()=>{
    setbookdesc('');
    setbookdetail('');
    setbookimage(null);
    setbookurl('');
    setbookname('')
  },[])

  var options = {
    title: 'Select Image',
    quality : 0.5,
    // storageOptions: {
    //   skipBackup: true,
    //   path: 'images',
    // },
 };

 const addimage= () => {
  try{
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } 
    else {
      setbookimage(response);
    }
  })
  }catch(error){
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
 }

  const uploadimage =async()=>{
    const reference = storage().ref(bookimage.assets[0].fileName);
    const pathToFile =  bookimage.assets[0].uri + '' ;
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    console.log(pathToFile);
        // uploads file
        try {
          await reference.putFile(pathToFile);
          console.log('Image uploaded successfully');
    
          const url = await reference.getDownloadURL();
          console.log('Download URL:', url);
          uploaditems(url)
    
          // Now that you have the URL, you can call uploaditems(url) here if needed.
    
        } catch (error) {
          console.error('Error uploading image:', error);
        }
    console.log('====================================');
    console.log('uploaditem');
    console.log('====================================');

  }

  const uploaditems = (url) => {
    console.log('enter');
    firestore()
    .collection('Books')
    .add({
      name: bookname,
      desc: bookdesc,
      det : bookdetail,
      img: url,
      url: bookurl
      
      
    })
    .then(() => {
      console.log('User added!');
    });
  }

  return (
    <ScrollView>
    <View style={styles.screen}>
    
    
    <View style={{marginTop:30,width:(windowWidth*90)/100}}/>

    <Text style={{fontSize:24,fontFamily:'Nunito-Bold',color:'black',marginLeft:-5}}> Enter Book Detail</Text>

    {bookimage==null ?<View style={styles.box}>
        <Icon type={Icons.AntDesign} name="camera" size={30} color="black" style={{alignSelf:'center'}}/>
    </View> :
     <Image style={{width:(windowWidth*90)/100,
        height:150,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignSelf:'center',
        marginTop:20
        }}
        
        source={{uri : bookimage.assets[0].uri}}
                
      />
    }
    <TouchableOpacity style={styles.minibox} activeOpacity={0.3} onPress={()=> {addimage()}}>
        <Text style={{fontSize:20,color:'#1F4EA9',textAlign:'center',fontFamily:"Nunito-Bold",}}> Add a Photo </Text>
    </TouchableOpacity> 

    <View style={{height:20}}/>

    <View style={{flexDirection:'row',alignItems:"center"}}>
      <Image style={{width:24,height:24,marginRight:20}} source={require('../Topnavigation/open-book.png')}/>

      <TextInput 
        style={{marginVertical:10,width:(windowWidth*80)/100,backgroundColor:'#E7F2FF',elevation:1}}
        label="Course"
        placeholder='Enter Course name'
        underlineColor='#1F4EA9'
        outlineColor='#1F4EA9'
        activeOutlineColor='#1F4EA9'
        activeUnderlineColor='#1F4EA9'
        onChangeText={text => setbookname(text)}
        value={bookname}
      />
    
    </View>

    <View style={{flexDirection:'row',alignItems:"center"}}>
      <Image style={{width:24,height:24,marginRight:20}} source={require('../Topnavigation/product-description.png')}/>

      <TextInput 
        style={{marginVertical:10,width:(windowWidth*80)/100,backgroundColor:'#E7F2FF',elevation:1}}
        label="Description"
        placeholder='Enter Course Description'
        underlineColor='#1F4EA9'
        outlineColor='#1F4EA9'
        activeOutlineColor='#1F4EA9'
        activeUnderlineColor='#1F4EA9'
        onChangeText={text => setbookdesc(text)}
        value={bookdesc}
      />
    
    </View>

    <View style={{flexDirection:'row'}}>
      <Image style={{width:24,height:24,marginRight:20,marginTop:20}} source={require('../Topnavigation/information.png')}/>

      <TextInput 
        style={{marginVertical:10,width:(windowWidth*80)/100,backgroundColor:'#E7F2FF',elevation:1}}
        label="Detail"
        placeholder='Enter Course Detail'
        underlineColor='#1F4EA9'
        outlineColor='#1F4EA9'
        activeOutlineColor='#1F4EA9'
        activeUnderlineColor='#1F4EA9'
        numberOfLines={4}
        multiline
        onChangeText={text => setbookdetail(text)}
        value={bookdetail}
      />
    
    </View>

    <View style={{flexDirection:'row',alignItems:"center"}}>
      <Image style={{width:24,height:24,marginRight:20}} source={require('../Topnavigation/link.png')}/>

      <TextInput 
        style={{marginVertical:10,width:(windowWidth*80)/100,backgroundColor:'#E7F2FF',elevation:1}}
        label="Url"
        placeholder='Enter Download Url'
        underlineColor='#1F4EA9'
        outlineColor='#1F4EA9'
        activeOutlineColor='#1F4EA9'
        activeUnderlineColor='#1F4EA9'
        onChangeText={text => setbookurl(text)}
        value={bookurl}
      />
    
    </View>

    <TouchableOpacity activeOpacity={0.3} onPress={() => {uploadimage()}}>
      <View style={{width:(windowWidth*90)/100,alignSelf:'center',height:50,borderRadius:10,backgroundColor:"#1F4EA9",justifyContent:"center",alignItems:"center",marginVertical:15}}> 
          <Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Submit </Text>
      </View>
    </TouchableOpacity>

    
    </View>
    </ScrollView>
  )
}

export default Books

const styles = StyleSheet.create({
  screen:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:"white"
    
  },
  box:{
    width:(windowWidth*90)/100,
    height:150,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:"#D9D9D9",
    alignSelf:'center',
    justifyContent:'center',
    marginTop:20
    // justifyContent:"flex-end"

  },
  minibox:{
    width:(windowWidth*90)/100,
    height:40,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:"white",
    elevation:3,
    justifyContent:'center',
    alignSelf:'center'
  },
})