import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {color, size, fonts, buildNumber, versionNumber} from '../../config';
import Verify from '../Verify';
import Payment from '../Payment';
import SignBankID from '../SignBankID';
import Camera from '../Camera';

const {width, height} = Dimensions.get('window');

export default function Home() {
  const [index, setIndex] = useState(0);
  //const [textValue, setTextValue] = useState(null);
  const [invoiceData, setInvoiceData] = useState(null);

  const scrollViewRef = useRef();
  const scrollToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
        x: (index + 1) * width,
        animated: true,
      });
      setIndex(index + 1);
    }
  };
  const scrollToPrev = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
        x: (index - 1) * width,
        animated: true,
      });
      setIndex(index - 1);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        horizontal
        pagingEnabled
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        keyboardShouldPersistTaps={'always'}
        onMomentumScrollEnd={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);

          setIndex(index);
        }}>
        <Camera
          next={ww => {
            // setInvoiceData(ww);
            scrollToNext();
          }}
        />
        <Verify
          next={() => {
            scrollToNext();
          }}
        />
        <Payment />
        <SignBankID />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
