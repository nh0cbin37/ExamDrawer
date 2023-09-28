import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const Squares = (props) =>
{
    return(
        <View style={[style.Box, {backgroundColor:'red'}]}  >
            <Text>{props.text}</Text>
        </View>
    )
}
const Ex6 = () => {
  return (
   <ScrollView style={style.container}>
        {data.map((item,index) =>
        (
            <Squares key={item} text={`Square ${index+1}`}/>
        ))}
   </ScrollView>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
       
        
    },
    Box:
    {
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Ex6