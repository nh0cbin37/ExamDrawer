import React from 'react'
import { Button } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

export default ex2 = () => {
  return (
    <View style={style.container}>
        <Button style={style.Button} icon={"camera"} mode="contained" onPress={() => alert("Hello")}/>
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

    Button:
    {
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
})
