import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import CustomdrawerContent from './customdrawerContent';
import Ex1 from './Ex1';
import ex2 from './ex2';
import { StyleSheet } from 'react-native';

const drawer = createDrawerNavigator();

const Tabnavigation = () => {


  return (
    <NavigationContainer>
        <drawer.Navigator
            initialRouteName='Ex1'
            drawerContent={(props) => <CustomdrawerContent {...props}/>}>
            <drawer.Screen name='Ex1' component={Ex1}/>
            <drawer.Screen name='Ex2' component={ex2}/>
        </drawer.Navigator>
    </NavigationContainer>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})
export default Tabnavigation