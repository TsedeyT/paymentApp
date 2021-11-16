import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {color, size} from '../../config';
const {width, height} = Dimensions.get('window');
import BackButton from '../../components/BackButton';

export default function SignBankID(props) {
  return (
    <View style={styles.container}>
      <BackButton
        backButton={() => props.navigation.goBack()}
        color={color.black}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.text}>BankID</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,

    justifyContent: 'center',
    backgroundColor: color.secondary,
    paddingVertical: 80,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: size.textSize24,
    marginBottom: size.marginBottom16,
    fontWeight: '700',
  },
});
