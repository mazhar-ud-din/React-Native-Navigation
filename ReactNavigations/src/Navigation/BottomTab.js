import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ConstantImages from '../Constant/image';
import { Explore } from '../Screen';
import NavigationString from './Constants/NavigationString';
import HomeStackScreen from './HomeStack';
import ProfileStackScreen from './ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (

    <Tab.Navigator 
    screenOptions={{headerShown:false,
    tabBarActiveTintColor:'red',
    tabBarShowLabel:false,
    tabBarStyle:{
      backgroundColor:"pink",
      height:65
    }
    }}
    
    >
      
      <Tab.Screen  name={NavigationString.HOME} component={HomeStackScreen} 
      options={{
        tabBarIcon:({focused})=>{
          return(
            
            <Image
             source={  ConstantImages.HomeIcon} style={styles.img} />

            //  source={ focused ? ConstantImages.HomeIcon: ConstantImages.GroupIcon} style={styles.img} />
          )
        }
      }}
      />
      <Tab.Screen  name={NavigationString.PROFILE} component={ProfileStackScreen}
      options={{
        tabBarIcon:({focused})=>{
          return(
            
            <Image
             source={ConstantImages.ChartIcon} style={styles.img} />
          )
        }
      }}
       />
      <Tab.Screen name={NavigationString.EXPLORE} component={Explore}
      options={{
        tabBarIcon:({focused})=>{
          return(
            
            <Image
             source={ConstantImages.GroupIcon} style={styles.img} />
          )
        }
      }}
       />

    </Tab.Navigator>
  )
}

export default BottomTab

const styles=StyleSheet.create({
  img:{
    height:30,
    width:30,
  },
  ActiveColor:{
    backgroundColor:'red'
  }

})