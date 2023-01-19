import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DrawerCom from '../Component/DrawerCom';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator()



const Routes = () => {
  return (

    <NavigationContainer>


      <Drawer.Navigator
        screenOptions={{ headerShown: false,
        drawerStyle:{
          backgroundColor:'pink',
          borderRadius:10,
        } }} 
        drawerContent={(props) => <DrawerCom {...props}/>}
        

         >

        <Drawer.Screen component={BottomTab} name='BottomTab' />
        

      </Drawer.Navigator>
     
    </NavigationContainer>
  )
}

export default Routes