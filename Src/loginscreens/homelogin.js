import React from "react";
import { StyleSheet, View,Text ,Dimensions , TouchableOpacity,Image} from 'react-native';
;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Homelogin = ({navigation}) => {
    return(
        <View style={styles.screen}>
            <View style={styles.circle}>

            </View>
            <Text style={styles.title}>
                Welcome To Eductology 
            </Text> 

            <Image style={styles.logo} source={require('../images/KnowTech.png')}/>

            <Text style={[styles.title,{color:'#67ADFF',marginTop:1,fontSize:18,textAlign:'center',fontFamily:'Arima-Bold'}]}>
            Let Educatology be the catalyst for your productivity journey! 
            </Text> 

            <TouchableOpacity style={[styles.signup]}
                    onPress={() => {
                        navigation.replace('signup')
                    }}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center',fontFamily:'Nunito-Bold'}}> Sign Up</Text>
            </TouchableOpacity>

            <Text style={{fontSize:18,color:'grey',marginTop:50,alignSelf:'center',fontFamily:'Nunito-Bold'}}> Already a member ? </Text>
            
            <TouchableOpacity
                onPress={() => {
                    navigation.replace('login')
                }}>
            <Text style={{fontSize:14,fontFamily:'Nunito-Bold',color:'#67ADFF',marginTop:20,alignSelf:'center',}}> Sign In </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#FFFFFF',
        
    },
    title:{
        fontSize:24,
        
        color:'white',
        alignSelf:'center',
        marginTop:70,
        fontFamily : 'Ubuntu-Bold'
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
    logo:{
        width:300,
        height:300,
        marginTop:120,
        alignSelf:'center'
    },
    signup:{
        width:(windowWidth*80)/100,
        height:50,
        alignSelf:'center',
        backgroundColor:'#67ADFF',
        marginTop:30,
        borderRadius:10,
        justifyContent:'center'
    }
})

export default Homelogin