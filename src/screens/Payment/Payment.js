import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RadioButtonRN from 'radio-buttons-react-native';

import {color, size, fonts} from '../../config';
import Button from '../../components/Button';

import CustomIcon from '../../components/CustomIcon';
import BackButton from '../../components/BackButton';
const {width, height} = Dimensions.get('window');

export default function Payment(props) {
  const amount = props.navigation.getParam('amount', null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedValue, setSelectedValue] = useState(amount);
  let interest = 200;

  const [index, setIndex] = useState(0);

  const paymentMethodType = [
    {
      label: 'Pay Now : ' + amount,
    },
    {
      label: 'Pay in 30 days :  ' + (amount + interest),
    },
    {
      label: 'Pay in 12 months : ' + Math.round(amount / 12),
    },
  ];

  return (
    <View style={styles.container}>
      <BackButton
        backButton={() => props.navigation.goBack()}
        color={color.black}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        pagingEnabled
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.headerText}>
          <Text style={styles.listText}>When do you want to Pay?</Text>
        </View>

        <RadioButtonRN
          data={paymentMethodType}
          selectedBtn={value => setSelectedValue(value)}
          icon={
            <CustomIcon
              icon="check-circle"
              size={25}
              color={'black'}
              iconLibrary={'FontAwesome'}
            />
          }
          initial={1}
          style={styles.radioButton}
          activeColor={color.primary}
          boxActiveBgColor={color.secondaryAccent}
          circleSize={24}
          textStyle={styles.text}
        />
      </ScrollView>
      <Button
        onClicked={() => {
          props.navigation.navigate('SignBankID', {});
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

    justifyContent: 'center',
    backgroundColor: color.secondary,
    paddingVertical: 80,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: size.textSize18,
    fontWeight: '400',
  },
  checkBoxWrapper: {
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 20,
  },
  paymentItem: {
    flexDirection: 'column',
  },
  scrollViewStyle: {
    flexGrow: 1,
    marginTop: 20,

    width: width - 32,
  },
  headerText: {
    fontSize: size.textSize24,
    marginBottom: size.marginBottom16,
    fontWeight: '700',
  },
  listText: {
    fontSize: 24,
    paddingLeft: 8,
    fontWeight: '800',
  },
  radioButton: {
    color: color.primary,

    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
