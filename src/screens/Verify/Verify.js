import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {color, size, fonts, buildNumber, versionNumber} from '../../config';
import CustomIcon from '../../components/CustomIcon';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

import {useSelector} from 'react-redux';

export default function Verify(props) {
  const invoiceContent = useSelector(
    state => state.textRecognition.invoiceContent,
  );
  const paymentReceiver = props.navigation.getParam('receiver');
  const amount = props.navigation.getParam('amount');
  const dueDate = props.navigation.getParam('dueDate');
  return (
    <View style={styles.container}>
      <BackButton
        backButton={() => props.navigation.goBack()}
        color={color.black}
      />
      <CustomIcon
        icon="edit"
        size={60}
        color={color.black}
        iconLibrary={'FontAwesome'}
        style={{alignItems: 'flex-end'}}
      />
      <View style={{marginBottom: 8}}>
        <Text style={styles.headerText}>Invoice</Text>
      </View>
      <View style={{flex: 1, padding: 16}}>
        <Text style={styles.text}>Receiver: {paymentReceiver}</Text>
        <Text style={styles.text}>Amount: {amount}</Text>
        <Text style={styles.text}>DueDate: {dueDate}</Text>
      </View>
      <Button
        onClicked={() => {
          props.navigation.navigate('Payment', {
            amount,
          });
        }}
        style={styles.button}
        btnText={'Next'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: color.white,
    paddingVertical: 80,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: size.textSize18,
    marginBottom: size.marginBottom16,
    fontWeight: '600',
  },
  headerText: {
    fontSize: 24,
    marginTop: 24,
    paddingLeft: 16,
    fontWeight: '800',
  },
});
