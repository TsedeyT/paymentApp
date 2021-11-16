import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import CustomIcon from '../CustomIcon';
export default function BackButton(props) {
  return (
    <Pressable onPress={props.backButton} style={props.style}>
      <CustomIcon
        iconLibrary="MaterialIcons"
        icon="chevron-left"
        size={32}
        color={props.color}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
