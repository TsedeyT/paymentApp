import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {color} from '../../config';
const {width, height} = Dimensions.get('window');

export default function Button(props, {style, onClicked = () => {}}) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          props.onClicked();
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? color.secondaryInteractive
              : color.primary,
          },
          styles.button,
        ]}>
        <Text style={styles.buttonText}>{props.btnText}</Text>
      </Pressable>
    </View>
  );
}
Button.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  onClicked: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: width - 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 11,
    ...color.shadow,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
