import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'


const Squares = (props) =>
{
    return(
        <View style={[style.Box, {backgroundColor:props.backgroundColor}]}  >
            <Text>{props.text}</Text>
        </View>
    )
}
const Ex5 = () => {
  return (
    <View style={style.container}>
        <Squares text='Square 1' backgroundColor='red'/>
        <Squares text='Square 2' backgroundColor='blue'/>
        <Squares text='Square 3' backgroundColor='green'/>
    </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Box:
    {
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Ex5