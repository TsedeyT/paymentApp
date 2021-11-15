import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {color} from '../../config';
const {width, height} = Dimensions.get('window');
export default function SignBankID() {
  return (
    <View style={styles.container}>
      <Text>BankID</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.neutral,
  },
});
