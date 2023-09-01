import React,{useState} from "react";
import { StyleSheet, View,Dimensions,Image, TextInput , TouchableOpacity , Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon , {Icons} from '../constant/Icons'; 

const Login = (props) => {
    const [Username, setUsername] = useState('');
    const [Password, setPasssword] = useState('');

    const [agree, setagree] = useState(false);

    return(
        <View style={styles.screen}> 
            <View style={styles.circle}/>
            <Image style={styles.logo} source={require('../images/Educatology2.png')}/>

            <View style={styles.username}>
                <Icon type={Icons.FontAwesome} name='user' size={25} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={Username}
                    onChangeText={data => setUsername(data)}
                    placeholder="Username"
                    placeholderTextColor="grey"
                    color='black'
                    style={{
                        width: (windowWidth*75)/100 ,
                        height: 50,
                    }}
                    />
            </View>

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
                    style={{
                        width: (windowWidth*75)/100 ,
                        height: 50,
                    }}
                    />
            </View>

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
             onPress={() => {props.navigation.replace('mydrawer',{
                use:Username,
                pass:Password
             }) }} >

                    <Text style={{fontSize:18,color:'white',fontWeight:'600',alignSelf:'center',fontFamily:'Nunito-Bold'}}> Sign In</Text>

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