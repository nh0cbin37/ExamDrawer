import React, { useState } from 'react'
import { Text, TextInput, Title } from 'react-native-paper'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const data = ["C","DEL","7","8","9","4","5","6","1","2","3","0","."];
const dataOperation = ["/","*","-","+","="];
 from = 0;
 to = 0;
 export default  Lad2 = () => {

    [textCacu, settextCacu] = useState("");
    [textEnter,setTextEnter] = useState("");
    const [DarkMode, setDarkMode] = useState(false)
    var substr = textEnter;

    //style
    const style = StyleSheet.create({
        container:
        {
            flex:1,
            flexDirection : "column",
            paddingTop:50
        },
        containerResult:
        {
            flex:2,
            backgroundColor: DarkMode ? "black":"#f5f5f5",
           alignItems:'flex-end',
           justifyContent:'flex-end'
        
        },
        containerButtonNumberAndOperation:
        {
            
            flex:4,
            flexDirection:'row',
            // justifyContent:'center',
            // alignItems:'center'
        },
        containerButtonNumberCDel:{
            flex:4,
            backgroundColor:DarkMode?"#000000":"#ffffff",
            
            
        },
        containerButtonOperation:{
            flex:1,
            backgroundColor:'aqua'
        },
        containerButtonNumber:{
            flex:1,
            flexDirection:'row',
            
        },
        inputextresult:
        {
            width:"100%",
            height:40,
            textAlign:'right',
            color:DarkMode?"#b5b7bb":"#000000",
            fontSize:30,
            paddingRight:5
        },
        textresult:
        {
            height:50,
            fontSize:40,
            fontSize:40,
            fontWeight:'bold',
            paddingRight:5,
            color:DarkMode?"#b5b7bb":"#000000",
        },
        buttonOperation:
        {
            flex:2,
            justifyContent:'center',
            alignItems:'center',
            
            
        },
        textOfButton:
        {
            fontSize:30,
            fontWeight:'bold',
            color:DarkMode?"#ffffff":"#000000",
        }
    
    })




    const ButtonsNum = ({from,to}) =>
    {
    return(
        
        <View style={style.containerButtonNumber}>
            {data.map((item,index) =>
            (   
                (index>=from && index < to)? 
                <TouchableOpacity key={item} style={style.buttonOperation}
                        onPress={() => item=="DEL"? (<>{settextCacu("")} {setTextEnter("")} </>):
                        item=="C"? setTextEnter(substr.substring(0,substr.length - 1)) 
                        : setTextEnter(textEnter+item)}>
                    <Text style={style.textOfButton}>{item} </Text>
                </TouchableOpacity>:null
            ))}
    </View>
        
    )
    }
    const ProcessOperation = (ops) =>
    {
        if(ops == '/' || ops == "*" || ops =="+" || ops == "-"){
            setTextEnter(textEnter)
            return 1;
        }
        return 0;
    }
    const ButtonsOperations = () =>
    {
        return(
            <View style={style.containerButtonOperation}>
                {dataOperation.map((item,index) =>
                (   
                    <TouchableOpacity key={item} style={style.buttonOperation} 
                        onPress={() => !(item=="=")? 
                            textEnter != ""? setTextEnter(textEnter+item):null
                            :ProcessOperation(textEnter[textEnter.length-1]) != 1? 
                                settextCacu(eval(textEnter).toString()) : null}>
                        <Text style={style.textOfButton}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>    
        )
        
    }

  return (
    <View style = {style.container}>
        <View style={style.containerResult}>
            <Entypo style={{padding:20,paddingBottom:100, alignSelf:'flex-start'}}name={DarkMode?'light-up':'moon'} size={24} color={DarkMode?'white':'black'}
                    onPress={() => DarkMode? setDarkMode(false): setDarkMode(true)}/>
            <Text style={style.inputextresult}>{textEnter}</Text>
            <Text style={style.textresult}>{textCacu}</Text>
        </View>
        {/* co cach khac la tao PT r goi cho nhanh */}
        <View style={style.containerButtonNumberAndOperation}>
                <View style={style.containerButtonNumberCDel}>
                    <ButtonsNum from={0} to={2} />
                    <ButtonsNum from={2} to={5} />
                    <ButtonsNum from={5} to={8} />
                    <ButtonsNum from={8} to={11} />
                    <ButtonsNum from={11} to={13} />
                </View>
            {/* nut phep tinh */}
                <ButtonsOperations/>
            
        </View>
    </View>
  )
}


