import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DrawerContent, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import {NavigationContainer } from '@react-navigation/native';
import Bottomnavigation from './Bottomnavigation';
import Icon, { Icons } from '../constant/Icons';
import Popularscreen from '../extrascreens/Popularscreen';
import Loginnavigation from './Loginnavigation';
import ScreenTracker from './ScreenTracker';
import Admin from '../Adminscreen/Topnavigation/Admin';
import Freecourse from '../Courses/Freecourse';
import Paidcourse from '../Courses/Paidcourse';
import Resources from '../Courses/Resources';
import Resourcepage from '../Pages/Resourcepage';
import { createStore } from 'redux';
import allreducer from '../Redux/Combinerreducers';
import { Provider } from 'react-redux'
import Freecoursepage from '../Pages/Freecoursepage';
import PaidCoursepage from '../Pages/PaidCoursepage';
import Favcoursepage from '../Pages/Favcoursepage';
import Bookpage from '../Pages/Bookpage';


const stack = createStackNavigator();
const drawer = createDrawerNavigator();
const Stores = createStore(allreducer);

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Customdrawer = (props) => {
  return(
    <DrawerContentScrollView {...props}
    contentContainerStyle={{backgroundColor:'white'}}
    >
      <ImageBackground source={require('../images/drawerbgm.png') }  style={{padding:10,}} >
          <Image source={{ uri:'https://thumbs.dreamstime.com/b/cute-man-face-cartoon-cute-man-face-cartoon-vector-illustration-graphic-design-135024353.jpg' }} style={{width:80,height:80,borderRadius:40,marginBottom:10}}/>
          <Text style={{fontSize:20,fontWeight:'700',color:'white'}}> Sangani Viraj</Text>
          <Text style={{fontSize:15,fontWeight:'500',color:'black',marginLeft:3,marginTop:5}}> Vsviraj60@gmail.com </Text>
       </ImageBackground>
          <View style={{flex:1,paddingTop:10,backgroundColor:'white'}}/>
          <DrawerItemList {...props} />

    </DrawerContentScrollView>
  )
}

const  Mydrawer = ({route}) => {
  const {em} = route.params;
  const {pass} = route.params;
  console.log("email : ",em ," & ", "pass : ",pass);
  return (
    <drawer.Navigator screenOptions={{
      drawerActiveTintColor:'#1882FF',
       drawerInactiveTintColor:'black',
       drawerLabelStyle:{
        // marginLeft:-15
       }
    }}
    
    drawerContent={props => < Customdrawer{...props} /> }>
      <drawer.Screen name='bottomnavigation' component={Bottomnavigation}
      options={{
        drawerIcon : ({color}) => (
          <Icon type={Icons.Ionicons} name='home' size={30} color={color} />
        )
      }}
      />
      <drawer.Screen name="feed" component={Feed} 
         options={{
          drawerIcon : ({color}) => (
            <Icon type={Icons.Ionicons} name='people-sharp' size={30} color={color} />
          )
        }}
      />
      <drawer.Screen name="Article" component={Article} 
      options={{
        drawerIcon : ({color}) => (
          <Icon type={Icons.Ionicons} name='person' size={30} color={color}/>
        )
      }}
      />
      <drawer.Screen name="admin" component={Admin} 
      options={{
        drawerIcon : ({color}) => (
          <Icon type={Icons.MaterialIcons} name='admin-panel-settings' size={30} color={color}/>
        )
      }}
      />

    </drawer.Navigator>
  ) 
}

const Mainnavigation = () =>{
  return(
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='loginnavigation' component={Loginnavigation}/>
        <stack.Screen name='mydrawer' component={Mydrawer} />
        <stack.Screen name='admin' component={Admin } options={{
              headerShown:true
            }}/>
        <stack.Screen name='PopularScreen' component={Popularscreen} options={{headerShown:true}}/>
        <stack.Screen name='freecourses' component={Freecourse} options={{headerShown:true}}/>
        <stack.Screen name='paidCoures' component={Paidcourse} options={{headerShown:true}}/>
        <stack.Screen name='resources' component={Resources} options={{headerShown:true}}/>

        <stack.Screen name='resourcespage' component={Resourcepage} options={{headerShown:true}}/>
        <stack.Screen name='bookpage' component={Bookpage} options={{headerShown:true}}/>
        <stack.Screen name='paidcoursepage' component={PaidCoursepage} options={{headerShown:true}}/>
        <stack.Screen name='freecoursepage' component={Freecoursepage} options={{headerShown:true}}/>
        <stack.Screen name='favcoursepage' component={Favcoursepage} options={{headerShown:true}}/>

      </stack.Navigator>
      {/* <ScreenTracker /> */}
    </NavigationContainer>
  )
}




const Home = () => {
  return (
    <Provider store={Stores}>
    <Mainnavigation />
    </Provider>
  )
}

export default Home

