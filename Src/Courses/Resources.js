import { LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    FlatList,
    Image,
    View } from 'react-native'
import React,{useState} from 'react'
import { windowWidth } from '../constant/extra'
import { resourcesdata } from '../Array/Coursearray'


const Resources = ({navigation}) => {
    return(
    <View style={styles.screen}>
            <View style={{flex:1,alignItems:'center'}}>
                <FlatList 
                data={resourcesdata}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                return(
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {navigation.navigate('resourcespage',{
                        rsdata : item
                    })}}>
                    <View style={styles.pack}>
                        <Image style={styles.packimg} source={{uri : item.url}}/>
                        <Text style={{fontSize:18,fontWeight:'600',color:'black',marginTop:10}}>{item.name} </Text>
                        <Text numberOfLines={2} style={{fontSize:14,fontWeight:'600',color:'#274971',marginTop:5}}>{item.desc} </Text>
                        <Text style={{fontSize:20,fontWeight:'800',color:'#0C3D9A',marginTop:10,alignSelf:'flex-end'}}>{item.auth} </Text>
                    </View>   
                    </TouchableOpacity>
                    )
                }}
                />
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    pack:{
        width:(windowWidth*45)/100,
        height:250,
        paddingVertical:10,
        justifyContent:'space-around',
        borderRadius:10,
        backgroundColor:"#E7F2FF",
        marginHorizontal:5,
        marginVertical:10,
        padding:10,
        
      },
      packimg:{
        width:(windowWidth*40)/100,
        height:100,
        borderRadius:10,
        alignSelf:'center'
      }
})

export default Resources