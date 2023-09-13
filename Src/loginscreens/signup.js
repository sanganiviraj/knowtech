import React,{useState} from "react";
import { StyleSheet, View , Image , Text , TextInput , Dimensions , TouchableOpacity} from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon , {Icons} from '../constant/Icons';

const Signup = ({navigation}) => {
    const [email, setemail] = useState('');
    const [Password, setPasssword] = useState('');
    const [Mobilenumber, setMobilenumber] = useState('');
    const [Pincode, setPincode] = useState('');
    const [agree, setagree] = useState(false);
    const [isInputFocused, setInputFocused] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [PincodeError,setPincodeError]=useState('');

    const handleFocus = () => {
        setInputFocused(true);
      };
    
      const handleBlur = () => {
        setInputFocused(false);
      };

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

      const validateMobile = () => {
        const mobilePattern = /^\d{10}$/;
    
        if (!mobilePattern.test(Mobilenumber)) {
          setMobileError('Enter a 10-digit mobile number');
          return false;
        }
    
        setMobileError('');
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

      const validatepincode = () => {
        if (Pincode.length > 6) {
          PincodeError('Password must be at least 8 characters long');
          return false;
        }
    
        setPincodeError('');
        return true;
      };


    const createuser =()=> {
        if(!validateEmail() || !validateMobile() || !validatePassword() || !validatepincode()){
            return
        }else{
          auth()
        .createUserWithEmailAndPassword(email, Password , Mobilenumber , Pincode)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
    
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
    
          console.error(error);
        });
        }
        // navigation.replace('mydrawer')
      }

    return(
        <View style={styles.screen}> 
            <View style={styles.circle} />
            
            <Image style={styles.logo} source={require('../images/Educatology2.png')}/>

            <TouchableOpacity style={{position:"absolute",right:20,marginTop:20}}
                onPress={() => {navigation.navigate('admin')}}
             >

            <Text style={{fontSize:24,color:'black',fontFamily:'Nunito-Bold'}}> Admin </Text>
            </TouchableOpacity>
            

            <Text style={{fontSize:18,color:'#8AC0FF',marginTop:50,alignSelf:'center',fontFamily:'Nunito-Bold'}}> Create Account </Text>

            <View style={styles.username} >
                <Icon type={Icons.FontAwesome} name='user' size={25} color={isInputFocused ? 'grey' : ''} style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={email}
                    onChangeText={data => setemail(data)}
                    placeholder="Email"
                    placeholderTextColor="grey"
                    color='black'
                    style={styles.sameinput}
                    />
            </View>
            { emailError !== '' && <Text style={{color:"red",marginLeft:30}}> {emailError}  </Text>}

            <View style={styles.username}>
                <Icon type={Icons.AntDesign} name='eye' size={25} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={Password}
                    secureTextEntry={true}
                    onChangeText={data => setPasssword(data)}
                    placeholder="Password"
                    placeholderTextColor="grey"
                    color='black'
                    style={styles.sameinput}/>
            </View>
            { passwordError !== '' && <Text style={{color:"red",marginLeft:30}}> {passwordError}  </Text>}

            <View style={styles.username}>
                <Icon type={Icons.Ionicons} name='call-sharp' size={25} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={Mobilenumber}
                    maxLength={10}
                    onChangeText={data => setMobilenumber(data)}
                    placeholder="Mobile Number"
                    placeholderTextColor="grey"
                    color='black'
                    style={styles.sameinput}/>
            </View>
            { mobileError !== '' && <Text style={{color:"red",marginLeft:30}}> {mobileError}  </Text>}

            <View style={styles.username}>
                <Icon type={Icons.Ionicons} name='location' size={25} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={Pincode}
                    maxLength={6}
                    onChangeText={data => setPincode(data)}
                    placeholder="Pincode"
                    placeholderTextColor="grey"
                    color='black'
                    style={styles.sameinput}
                    />
            </View>
            { PincodeError !== '' && <Text style={{color:"red",marginLeft:30}}> {PincodeError}  </Text>}

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
         onPress={() => {createuser()}} >
                    <Text style={{fontSize:18,color:'white',fontWeight:600,alignSelf:'center',}}> Sign Up </Text>
        </TouchableOpacity>

        <Text style={{fontSize:18,fontFamily:'Nunito-Bold',color:'grey',marginTop:50,alignSelf:'center'}}> Already have an account ? </Text>
            
            <TouchableOpacity 
                onPress={() => {navigation.navigate('login')}}>
            <Text style={{fontSize:14,color:'#67ADFF',marginTop:20,alignSelf:'center',fontFamily:'Nunito-Bold'}}> Sign In </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
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
        alignSelf:'center'
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
    sameinput:{
        height:50,
        width: (windowWidth*75)/100 ,
    }
})

export default Signup