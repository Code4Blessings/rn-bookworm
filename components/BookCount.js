import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BookCount = ({title, count}) => {
    return(
        <View style={styles.footer}>
          <Text style={styles.footerText}>{title}</Text>
          <Text>{count}</Text>
        </View>
    );
    
};

const styles = StyleSheet.create({
 footer: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 footerText: {
   fontSize: 20
 }
});

export default BookCount;
