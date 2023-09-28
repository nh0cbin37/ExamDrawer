import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const Ex7 = () => {
  [texts,setText] = useState('');
  return (
    <View style={style.container}>
        <Text >What's your name?</Text>
        <TextInput value={texts}  mode='outlined' placeholder='Enter Your name' onChangeText={setText}/>
        <Button icon={'account'} style={style.Buton}  onPress={() => alert(`Hello ${texts}`)}>Say hello</Button>
    </View>
  )
}

const style = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Buton:
    {
        color:'black',
        fontSize:20
    }
    
})
export default Ex7