import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {color, size, fonts} from '../../config';
const {width, height} = Dimensions.get('window');

export default function Payment(props) {
  const amount = props.navigation.getParam('amount', null);

  let interest = 200;
  const paymentMethodMonth = amount + interest;
  const paymentMethodYear = amount / 12;
  console.log({amount});
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginVertical: 40,
        }}
        pagingEnabled
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View
          style={{
            padding: 16,

            fontSize: size.textSize24,
            marginBottom: size.marginBottom16,
            fontWeight: '600',
          }}>
          <Text> When do you want to Pay?</Text>
        </View>

        <Text>Pay Now : {amount}</Text>
        {!paymentMethodMonth && (
          <Text>Pay in 30 days : {paymentMethodMonth}</Text>
        )}
        {!paymentMethodYear && (
          <Text>Split in 12 Months : {paymentMethodYear}</Text>
        )}
      </ScrollView>
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
    marginBottom: size.marginBottom16,
    fontWeight: '600',
  },
});
