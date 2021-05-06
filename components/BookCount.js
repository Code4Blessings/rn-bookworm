import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

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

BookCount.proptypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string
};

BookCount.defaultProps = {
  title: 'Title'
}

export default BookCount;
