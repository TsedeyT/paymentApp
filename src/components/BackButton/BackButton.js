import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomIcon from '../CustomIcon';
export default function BackButton(props) {
  return (
    <TouchableOpacity onPress={props.backButton} style={props.style}>
      <CustomIcon
        iconLibrary="MaterialIcons"
        icon="chevron-left"
        size={32}
        color={props.color}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
