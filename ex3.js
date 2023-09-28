import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {  Text } from 'react-native-paper'

const Buttons =(props) =>
{
    return(
    <TouchableOpacity style={{...style.CusButton, backgroundColor:props.backgroundColor}}>
        <Text style={{color:'black'}}>
            {props.text}
        </Text>
    </TouchableOpacity>
    )
}

export default ex3 = () => {
  return (
    <View style={style.container}>
        <Buttons text='Call me baby' backgroundColor= 'red'  onPress={() => alert('hello baby')} />
        <Buttons text='Thanh baby'  backgroundColor= 'blue'  onPress={() => alert('Thanh ga')}/>
    </View>
    )
}


const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'    
    },

    CusButton:
    {
        alignSelf:'center',
        padding:10
    }
})