import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Books from './Books';
import Courses from './Courses';

const Tab = createMaterialTopTabNavigator();

const Admin = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='books' component={Books}/>
        <Tab.Screen name='coures' component={Courses}/>
    </Tab.Navigator>
  )
}

export default Admin

const styles = StyleSheet.create({})