import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import Icon, { Icons } from '../constant/Icons'
import Mainscreen from '../Screens/Mainscreen'
import Bookscreen from '../Screens/Bookscreen'
import Taskscreen from '../Screens/Taskscreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Animatable from 'react-native-animatable';
import Profilescreen from '../Screens/Profilescreen'
import ScreenTracker from './ScreenTracker'

const Stack = createBottomTabNavigator()

const Tabbar = [
  {route:'mainscreen',label:'main',type:Icons.Ionicons,activeIcon:'home',inActiveIcon:'home-outline',component:Mainscreen,header:false},
  {route:'bookscreen',label:'book',type:Icons.Ionicons,activeIcon:'book-sharp',inActiveIcon:'book-outline',component:Bookscreen,header:false},
  {route:'taskscreen',label:'task',type:Icons.MaterialCommunityIcons,activeIcon:'view-list',inActiveIcon:'view-list-outline',component:Taskscreen,header:false},
  {route:'profilescreen',label:'profile',type:Icons.FontAwesome,activeIcon:'user',inActiveIcon:'user-o',component:Profilescreen,header:false},
]


const Tabbarbutton = (props) => {
  const {item,onPress,accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(()=> {
    if (focused) {
      viewRef.current.animate({0: {scale: .5}, 1: {scale: 1.5}});
  } else {
      viewRef.current.animate({0: {scale: 1.5}, 1: {scale: 1}});
  }

  },[focused])

  return(
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={1}>
        <Animatable.View style={styles.container} duration={200} ref={viewRef}>
             <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? '#1882FF' : '#8AC0FF'}/>
        </Animatable.View>
    </TouchableOpacity>
) 
}

const Bottomnavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      tabBarStyle:{
        height:60,
        position:'absolute',
        bottom:16,
        left:16,
        right:16,
        borderRadius:16,
        elevation:10,
        shadowColor: 'black',
        
      }
    }}
    >

      {
        Tabbar.map((item,index) => {
          return(
            <Stack.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel:false,
              headerShown:item.header,
              tabBarButton : (props) => <Tabbarbutton {...props} item={item} />
            }}
            />
          )
        })
      }
    
    </Stack.Navigator>
  )
}

export default Bottomnavigation

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})