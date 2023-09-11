import { StyleSheet, Text, View,TouchableOpacity,Image,Modal,Pressable, Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import { windowWidth } from '../../constant/extra';
import Icon, { Icons } from '../../constant/Icons';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { ToastAndroid } from 'react-native';

const Books = () => {
  const [bookname,setbookname]=useState('');
  const [bookdesc,setbookdesc]=useState('');
  const [bookdetail,setbookdetail]=useState('');
  const [bookurl,setbookurl] = useState('');
  const [bookimage,setbookimage]=useState(null);
  const [loading,setloading]=useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pass,setpass]=useState('');

  useEffect(()=>{
    setbookdesc('');
    setbookdetail('');
    setbookimage(null);
    setbookurl('');
    setbookname('')
    setModalVisible(true)

  
  },[])

  var options = {
    title: 'Select Image',
    quality : 0.5,
    mediaType: 'photo',
    storageOptions: {
    skipBackup: true,
    path: 'images',
   }
}

 const addimage= async() => {
  // try{
    await launchImageLibrary(options, response => {
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
  // }catch(error){
  //     console.log('====================================');
  //     console.log(error);
  //     console.log('====================================');
  //   }
 }

  const uploadimage =async()=>{
    if(bookname===''||bookdesc===''||bookdetail==''||bookimage==null||bookurl==''){
      ToastAndroid.show('Enter Valid Values !', ToastAndroid.SHORT);
    }else{
      setloading(true);
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
      setloading(false);
    });
  }

 const _onhandleenter= () => {

  if(pass === "9181"){
    setModalVisible(!modalVisible)
  }else{
    ToastAndroid.show('Enter Valid Password !', ToastAndroid.SHORT);
  }
  
 }

  return (
    <ScrollView>
    <View style={styles.screen}>
    
    <Modal
        animationType="slide"
        transparent={true}
        
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
       
        <View style={styles.modalview}>
        <BlurView
          style={{ flex: 1,justifyContent:'center',position:'absolute',alignSelf:'center',alignItems:'center' }}
          // blurType="light" // You can change the blur type as per your preference
          blurAmount={50}  
          // You can adjust the blur amount
        >
          <View style={styles.modalbox}>
          
            <Text style={{fontSize:18,color:'black',alignSelf:'center'}}>Enter Admin Password!</Text>

            <TextInput 
              style={{height:40,marginVertical:5,elevation:1}}
              placeholder='****'
              maxLength={4}
              value={pass}
              onChangeText={text => setpass(text)}
              underlineColor='#1F4EA9'
              outlineColor='#1F4EA9'
              activeOutlineColor='#1F4EA9'
              activeUnderlineColor='#1F4EA9'
              secureTextEntry={true}
              keyboardType='numeric'
            />

            <Pressable
             
              onPress={() => _onhandleenter()}>
              <Text style={{fontSize:18,color:'#1F4EA9',}}> Submit </Text>
            </Pressable>
            
          </View>
          </BlurView>
        </View>
        

      </Modal>
        
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
        label="Book"
        placeholder='Enter Book name'
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

    <TouchableOpacity activeOpacity={0.3} onPress={() => {uploadimage()}} disabled={loading==true}>
      <View style={{width:(windowWidth*90)/100,alignSelf:'center',height:50,borderRadius:10,backgroundColor:"#1F4EA9",justifyContent:"center",alignItems:"center",marginVertical:15}}> 
          { loading == false ?<Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Submit </Text>:
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Loading </Text>  
            <ActivityIndicator color='white' size={26}/>
          </View>}
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
    backgroundColor:"white",
   
  },
  modalview:{
    flex:1,
    paddingHorizontal:10,
    justifyContent:'center',
    

  },
  modalbox:{
    // margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    // justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:(windowWidth*70)/100,
    height:130
    
    
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