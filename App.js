import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ex1 from './Ex1';
import ex2 from './ex2';
import Ex2 from './ex2';
import ex3 from './ex3';
import Ex3 from './ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6.js';
import Ex7 from './ex7';
import Ex8 from './Ex8';
import Lad2 from './Lad2';
import Tabnavigation from './Tabnavigation';

export default  App=()=> {
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'Ex1', title: 'Ex1', focusedIcon: 'heart', unfocusedIcon: 'bell-outline'},
  //   { key: 'Ex2', title: 'Ex2', focusedIcon: 'heart',  unfocusedIcon: 'bell-outline'},
  //   { key: 'Ex3', title: 'Ex3', focusedIcon: 'heart',  unfocusedIcon: 'bell-outline'},
  //   { key: 'Ex4', title: 'Ex4', focusedIcon: 'heart', unfocusedIcon: 'bell-outline' },
  //   { key: 'Ex5', title: 'Ex5', focusedIcon: 'heart', unfocusedIcon: 'bell-outline' },
  //   { key: 'Ex6', title: 'Ex6', focusedIcon: 'heart', unfocusedIcon: 'bell-outline' },
  //   { key: 'Ex7', title: 'Ex7', focusedIcon: 'heart', unfocusedIcon: 'bell-outline' },
  //   { key: 'Ex8', title: 'Ex8', focusedIcon: 'heart', unfocusedIcon: 'bell-outline' },
    
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //  Ex1:Ex1,
  //  Ex2:ex2,
  //  Ex3:ex3,
  //  Ex4:Ex4,
  //  Ex5:Ex5,
  //  Ex6:Ex6,
  //  Ex7:Ex7,
  //  Ex8:Ex8,
  // });

  // return (
  //   <SafeAreaProvider>
  //     <BottomNavigation
  //       navigationState={{ index, routes }}
  //       onIndexChange={setIndex}
  //       renderScene={renderScene}
  //     /></SafeAreaProvider>
  // );

  return(
    <Tabnavigation/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
