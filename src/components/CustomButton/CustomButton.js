import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
   

    </Pressable>

  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#99E7E2',
    
  },

  container_SECONDARY: {
    borderColor: '#99E7E2',
    borderWidth: 2,
    
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'black',
  },

  text_SECONDARY: {
    color: 'black',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
