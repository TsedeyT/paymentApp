import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {GET_CONTENT} from '../../actions/content-actions';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button';
import {color, size, fonts, buildNumber, versionNumber} from '../../config';
const {width, height} = Dimensions.get('window');

function Camera(props) {
  const [images, setImages] = useState();
  const dispatch = useDispatch();
  const contentFromReducer = useSelector(
    state => state.textRecognition.invoiceContent,
  );
  const stateContentError = useSelector(state => state.textRecognition.error);
  const onImageSelect = async media => {
    if (!media.didCancel) {
      setImages(media.uri);

      dispatch(GET_CONTENT());
      props.navigation.navigate('Verify', {
        receiver: 'Tele2',
        amount: 19157,
        dueDate: new Date('2020-06-06').toISOString().split('T')[0],
      });
    } else if (media.didCancel) {
      console.log('user cancelled image picker');
    } else {
      console.log(media.error);
    }
  };
  const onTakePhoto = () => launchCamera({mediaType: 'image'}, onImageSelect);
  const onSelectImagePress = () =>
    launchImageLibrary({mediaType: 'image'}, onImageSelect);

  useEffect(() => {
    if (contentFromReducer !== '' || stateContentError !== null) {
      console.log(contentFromReducer);
    }
  }, [contentFromReducer]);
  return (
    <>
      <View style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Button
            onClicked={onTakePhoto}
            style={styles.button}
            btnText={'Take Photo'}
          />
        </View>

        <Button
          onClicked={onSelectImagePress}
          style={styles.button}
          btnText={'Pick a Photo'}
        />
      </View>
      <View>
        <Text style={styles.versionText}>
          Version {versionNumber} ({buildNumber})
        </Text>
      </View>
    </>
  );
}

export default Camera;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  versionText: {
    ...fonts.normal,
    color: color.secondaryAccent,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 80,
  },
});
