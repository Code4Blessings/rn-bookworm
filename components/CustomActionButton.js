import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const CustomActionButton = ({children, onPress, style}) => (
     <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, style]}>
            {children}
            </View>
        </TouchableOpacity>
);

CustomActionButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    style: PropTypes.object
}

CustomActionButton.defaultProps = {
    style: {}
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#deada5'
    }
});

export default CustomActionButton;
