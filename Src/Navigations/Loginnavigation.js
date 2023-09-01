import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Homelogin from '../loginscreens/homelogin';
import Login from '../loginscreens/login';
import Signup from '../loginscreens/signup';
import Admin from '../Adminscreen/Topnavigation/Admin';

const Stack = createStackNavigator();


const Loginnavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="homelogin" component={Homelogin}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="signup" component={Signup}/>
            
    </Stack.Navigator>
  )
}



const styles = StyleSheet.create({})

export default Loginnavigation