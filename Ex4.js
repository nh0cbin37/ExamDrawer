import React, { useState } from 'react'
import {  StyleSheet, View } from 'react-native'
import { Text,Button } from 'react-native-paper'

const Ex4 = () => {
    [pressCount, SetPressCount] = useState(0)
  return (
    <View style={style.container}>
        <Text style={style.text}>You've press the button:{pressCount} item(s)</Text>
        <Button onPress={() => SetPressCount(pressCount+1)}>Press me</Button>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'black',
        paddingTop:25
    }
})
export default Ex4