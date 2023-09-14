import React,{useState} from "react";
import { StyleSheet, View,Dimensions,Image, TextInput , TouchableOpacity , Text , ToastAndroid,ActivityIndicator} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon , {Icons} from '../constant/Icons'; 

const Login = (props) => {
    const [email, setemail] = useState('');
    const [Password, setPasssword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [agree, setagree] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [loading,setloading]=useState('');

    const validateEmail = () => {
        // Regular expression for a valid email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (!emailPattern.test(email)) {
          setEmailError('Enter a valid email address');
          return false;
        }
    
        setEmailError('');
        return true;
      };


      const validatePassword = () => {
        if (Password.length < 8) {
          setPasswordError('Password must be at least 8 characters long');
          return false;
        }
    
        setPasswordError('');
        return true;
      };


      const siginuser = () => {
        if(!validateEmail || !validatePassword){
            return
        }else{
            setloading(true)
            auth()
            .signInWithEmailAndPassword(email,Password)
            .then(()=>{
            //   Alert.alert('sign in user')
            setloading(false)
              props.navigation.replace('mydrawer',{
                em : email,
                pass : Password
              }) 
            })
            .catch(error => {
              console.log(error);
            //   ToastAndroid.show( error, ToastAndroid.SHORT);
            })

           
        }
        
      }

    return(
        <View style={styles.screen}> 
            <View style={styles.circle}/>
            <Image style={styles.logo} source={require('../images/Educatology2.png')}/>

            <View style={styles.username}>
                <Icon type={Icons.FontAwesome} name='user' size={25} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={data => setemail(data)}
                    placeholder="Email"
                    placeholderTextColor="grey"
                    color='black'
                    style={{
                        width: (windowWidth*75)/100 ,
                        height: 50,
                    }}
                    />
            </View>
            { emailError !== '' && <Text style={{color:"red",marginLeft:30,fontSize:11}}> {emailError}  </Text>}

            <View style={styles.username}>
                <Icon type={Icons.AntDesign} name='eye' size={25} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={Password}
                    secureTextEntry={true}
                    keyboardType="numeric"
                    onChangeText={data => setPasssword(data)}
                    placeholder="Password"
                    placeholderTextColor="grey"
                    color='black'
                    style={{
                        width: (windowWidth*75)/100 ,
                        height: 50,
                    }}
                    />
            </View>
            { passwordError !== '' && <Text style={{color:"red",marginLeft:30,fontSize:11}}> {passwordError}  </Text>}
            
            <View style={styles.line}>
                <CheckBox 
                    value={agree}
                    onValueChange={() => setagree(!agree)}
                    tintColors={agree ? 'blue' : 'black'}
                />

                 <Text style={styles.privacy}> I have read and agree with TC</Text>
            </View>

            <TouchableOpacity style={[styles.signup,{backgroundColor : agree ? '#67ADFF' : 'grey'}]}
             disabled={!agree} 
             onPress={() => {siginuser()}} >

                    {loading==false ? <Text style={{fontSize:18,color:'white',fontWeight:'600',alignSelf:'center',fontFamily:'Nunito-Bold'}}> Sign In</Text> : <ActivityIndicator></ActivityIndicator>}

            </TouchableOpacity>


            <Text style={{fontSize:18,fontFamily:'Nunito-Bold',color:'grey',marginTop:50,alignSelf:'center'}}> Don’t You Have Account ? </Text>
            
            <TouchableOpacity 
            onPress={() => { props.navigation.navigate('signup')}}>
                <Text style={{fontSize:14,fontFamily:'Nunito-Bold',color:'#67ADFF',marginTop:20,alignSelf:'center'}}> Sign Up </Text>
            </TouchableOpacity>

      
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        borderRadius:244,
        backgroundColor:'#67ADFF',
        width:488,
        height:488,
        position:'absolute',
        marginTop:-270,
        alignSelf:'center'
    },
    screen:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    logo:{
        width:250,
        height:150,
        marginTop:40,
        alignSelf:'center',
        marginBottom :100
    },
    username:{
        marginTop:20,
        width: (windowWidth*90)/100 ,
        height: 50,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 18,
        alignSelf: 'center',
        color: 'black',
        flexDirection:'row'
    },
    signup:{
        width:(windowWidth*80)/100,
        height:50,
        alignSelf:'center',
        backgroundColor:'#67ADFF',
        marginTop:30,
        borderRadius:10,
        justifyContent:'center'
    },
    privacy: {
        fontSize: 12,
        fontWeight: '500',
        color: '#3E6145',
     },
      line: {
        marginLeft: 20,
        marginTop: 20,
        // padding:5,
    
        flexDirection: 'row',
        alignItems: 'center',
      },
})

export default Login