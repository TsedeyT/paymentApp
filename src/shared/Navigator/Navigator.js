import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CustomIcon from '../../components/CustomIcon';
import {color} from '../../config';

import Camera from '../../screens/Camera';
import Payment from '../../screens/Payment';
import Verify from '../../screens/Verify';
import SignBankID from '../../screens/SignBankID';

const InvoiceStackNavigator = createStackNavigator(
  {
    Camera,
    Verify,
    Payment,
    SignBankID,
  },
  {
    headerMode: 'none',

    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const AppContainer = createAppContainer(InvoiceStackNavigator);

export default Navigator = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.primary,
      }}>
      <AppContainer />
    </View>
  );
};
