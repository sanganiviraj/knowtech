import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { TextInput } from 'react-native-paper'
import { windowWidth } from '../../constant/extra'
import Icon, { Icons } from '../../constant/Icons'
import { RadioButton } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';





const Courses = () => {
  const[coursename,setcoursename] = useState('');
  const[description,setdescription] = useState('');
  const[detail,setdetail] = useState('');
  const[checked,setchecked] = useState('Paid');
  const[courseimage,setcouresimage]=useState(null);
  const[price,setprice]=useState(0);
  const[time,settime]=useState('');

  
  useEffect(()=>{
    setcoursename('')
    setcoursename('')
    setdetail('')
    setchecked('Paid')
    setcouresimage(null)
    setprice(0)
    settime('')
  },[])


  var options = {
    title: 'Select Image',
    quality : 0.5,
    // storageOptions: {
    //   skipBackup: true,
    //   path: 'images',
    // },
 };

 const adddimage= () => {
  try{
  launchImageLibrary(options, response => {
    console.log('Response = ', response);
   if (response.didCancel) {
     console.log('User cancelled image picker');
   } else if (response.error) {
     console.log('ImagePicker Error: ', response.error);
   } 
  //  else if (response.customButton) {
  //    console.log(
  //      'User tapped custom button: ',
  //      response.customButton
  //    );
    //  alert(response.customButton);
  //  } 
   else {
     setcouresimage(response);
   }
  })

}catch(error){
  console.log('====================================');
  console.log(error);
  console.log('====================================');
}

 }



  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        opengallery()
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
      // setImmediate(result)
    }
  };

  const opengallery = async() =>{
    try{
      const final = await launchImageLibrary({mediaType:'photo'})
      if(final.didCancel){
        console.log('cancel')
      }else{
        console.log('++++++++++++++++++++++++++');
        console.log(final);
        console.log('====================================');
        setcouresimage(final)
      }
    }catch(error){
      console.log('Not selected image properly')
    }
  }

  const uploadimage =async()=>{

    const reference = storage().ref(courseimage.assets[0].fileName);
    const pathToFile =  courseimage.assets[0].uri + '' ;
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
    // if(price=='0'){
    //   setprice('Free')
    //   console.log('price set')
    // }else{
    //   console.log('ok,done')
    // }
    firestore()
    .collection('Courses')
    .add({
      name: coursename,
      desc: description,
      det : detail,
      img: url,
      Prc : price,
      tm : time
      
      
    })
    .then(() => {
      console.log('User added!');
    });
  }



  return (
    <ScrollView>
    <View style={styles.screen}>
    
    <View style={{marginTop:30,width:(windowWidth*90)/100}}/>

    <View style={{flexDirection:'row',alignItems:"center"}}>
    <Image style={{width:24,height:24,marginRight:20}} source={require('../Topnavigation/online-course.png')}/>

    <TextInput 
    style={{marginVertical:10,width:(windowWidth*80)/100,backgroundColor:'#E7F2FF',elevation:1}}
     label="Course"
     placeholder='Enter Course name'
     underlineColor='#1F4EA9'
     outlineColor='#1F4EA9'
     activeOutlineColor='#1F4EA9'
     activeUnderlineColor='#1F4EA9'
     onChangeText={text => setcoursename(text)}
     value={coursename}
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
     onChangeText={text => setdescription(text)}
     value={description}
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
     onChangeText={text => setdetail(text)}
     value={detail}
    />
    
    </View>

    <View style={{flexDirection:'row',alignItems:"center"}}>
    <Image style={{width:24,height:24,marginRight:20}} source={require('../Topnavigation/back-in-time.png')}/>

    <TextInput 
    style={{marginVertical:10,width:(windowWidth*80)/100,backgroundColor:'#E7F2FF',elevation:1}}
     label="Duration"
     placeholder='Around time...'
     underlineColor='#1F4EA9'
     outlineColor='#1F4EA9'
     activeOutlineColor='#1F4EA9'
     activeUnderlineColor='#1F4EA9'
     onChangeText={text => settime(text)}
     value={time}
    />
    
    </View>

    


    {courseimage==null ?<View style={styles.box}>
        <Icon type={Icons.AntDesign} name="camera" size={30} color="black" style={{alignSelf:'center'}}/>
    </View> :
     <Image style={{width:(windowWidth*90)/100,
        height:150,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignSelf:'center',
        marginTop:20
        }}
        
        source={{uri : courseimage.assets[0].uri}}
                
      />
    }

    {/* <TouchableOpacity  >  */}
    <TouchableOpacity style={styles.minibox} activeOpacity={0.3} onPress={()=> {adddimage()}}>
        <Text style={{fontSize:20,color:'#1F4EA9',textAlign:'center',fontFamily:"Nunito-Bold",}}> Add a Photo </Text>
     </TouchableOpacity> 
     {/* </TouchableOpacity> */}

    
    <RadioButton.Group
            onValueChange={newvalue => setchecked(newvalue)}
            value={checked}
            >
            <View style={{flexDirection: 'row',marginTop:30,width:(windowWidth*90)/100,alignSelf:'center'}}>
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                    fontFamily:"Nunito-Bold",
                    marginRight: -5,
                  }}>
                  {' '}
                  Paid{' '}
                </Text>
                <RadioButton value="Paid" color='#1F4EA9'/>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                    fontFamily:"Nunito-Bold",
                    marginRight: -5,
                  }}>
                  {' '}
                  Free{' '}
                </Text>
                <RadioButton value="Free" color='#1F4EA9'/>
              </View>
            </View>
          </RadioButton.Group>

      <View style={{width:(windowWidth*90)/100,alignSelf:'center'}}>

      {
        checked == 'Paid' ? 
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon type={Icons.FontAwesome} name="dollar" size={30} color="black" style={{alignSelf:'center',marginRight:10}}/>

          <TextInput 
          style={{marginVertical:10,width:(windowWidth*60)/100,backgroundColor:'#E7F2FF',elevation:1}}
          label="Price"
          placeholder='Enter Price'
          underlineColor='#1F4EA9'
          outlineColor='#1F4EA9'
          activeOutlineColor='#1F4EA9'
          activeUnderlineColor='#1F4EA9'
          keyboardType='numeric'
          onChangeText={text => setprice(text)}
          value={price.toString()}
          />
  
        </View> :
        <></>     
      
      }    

      <TouchableOpacity activeOpacity={0.3} onPress={() => {uploadimage()}}>
      <View style={{width:(windowWidth*90)/100,alignSelf:'center',height:50,borderRadius:10,backgroundColor:"#1F4EA9",justifyContent:"center",alignItems:"center",marginVertical:20}}> 
          <Text style={{fontSize:20,color:'white',fontFamily:"Nunito-SemiBold"}}> Submit </Text>
      </View>
      </TouchableOpacity>

      </View>    
   


    

   

    </View>
    </ScrollView>
  )
}

export default Courses

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