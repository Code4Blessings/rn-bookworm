import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <SafeAreaView />
      <View style={styles.borderBottom}>
         <Text style={styles.headerText}>Book Worm</Text>
      </View>
      <View style={styles.header} />
      <View style={styles.borderTop}>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Total</Text>
          <Text>0</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Reading</Text>
          <Text>0</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Read</Text>
          <Text>0</Text>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1, 
 },
 box: {
   height: 50,
   width: 50,
   backgroundColor: 'red' 
 },
 borderBottom: {
    height: 70, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#E9E9E9', 
    alignItems: 'center',
    justifyContent: 'center'
 },
 header: {
   flex: 1,
   
 }, 
 headerText: {
   fontSize: 24

 },
 borderTop: {
   height: 70, 
   borderTopWidth: 0.5, 
   borderTopColor: '#E9E9E9',
   flexDirection: 'row',
 },
 footer: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 footerText: {
   fontSize: 20
 }
});
