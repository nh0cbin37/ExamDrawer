import React, { useState } from 'react'
import { Drawer } from 'react-native-paper';
import { StyleSheet,View } from 'react-native';

export default customdrawerContent = ({navigation}) => {
    [active,setActive]= useState('');
    return (
   <View style={style.container}>
        <Drawer.Section title='Menu Exam'>
            <Drawer.Item
                icon={"home"}
                label="Exam 1"
                active={active==='home'}
                onPress={() =>{
                    setActive('home')
                    navigation.navigate("Ex1") }}/>
            <Drawer.Item
                icon={"home"}
                label="Exam 2"
                active={active==='Ex1'}
                onPress={() =>{
                    setActive('Ex1')
                    navigation.navigate("Ex2") }}/>
        
        </Drawer.Section>
   </View> 
    )
}
const style = StyleSheet.create({
    container:
    {
        flex:1,
        paddingTop:40
    }
})