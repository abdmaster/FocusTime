import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fontSizes } from '../utils/Sizes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: 120 / 2,
      width: 65,
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: { color: '#fff', fontSize: fontSizes.md },
  });
