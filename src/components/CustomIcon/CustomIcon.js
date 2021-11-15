import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {fonts} from '../../config';
import PropTypes from 'prop-types';

export default function CustomIcon({
  style,
  icon = '',
  iconLibrary = 'MaterialIcons',
  color = 'black',
  size = 24,
  tintImages = false,
}) {
  return (
    <View style={style}>
      {iconLibrary === 'MaterialIcons' && (
        <MaterialIcon name={icon} style="rounded" color={color} size={size} />
      )}
      {iconLibrary === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcon
          name={icon}
          style="rounded"
          color={color}
          size={size}
        />
      )}
      {iconLibrary === 'Ionicons' && (
        <Ionicon name={icon} style="rounded" color={color} size={size} />
      )}
      {iconLibrary === 'TextIcons' && (
        <Text style={[styles.textIcon, {color: color, fontSize: size}]}>
          {icon}
        </Text>
      )}
      {iconLibrary === 'FeatherIcons' && (
        <FeatherIcon name={icon} style="rounded" color={color} size={size} />
      )}
      {iconLibrary === 'FontAwesome' && (
        <FontAwesomeIcon name={icon} solid color={color} size={size} />
      )}
      {iconLibrary === 'ImageIcons' && (
        <Image
          resizeMode="contain"
          source={icon}
          style={[
            {width: size, height: size},
            tintImages ? {tintColor: color} : {},
          ]}
          width={size}
          height={size}
        />
      )}
    </View>
  );
}

CustomIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.number,
  tintImages: PropTypes.bool,
  iconLibrary: PropTypes.oneOf([
    'MaterialIcons',
    'MaterialCommunityIcons',
    'Ionicons',
    'TextIcons',
    'ImageIcons',
    'FeatherIcons',
    'FontAwesome',
  ]),
};

const styles = StyleSheet.create({
  textIcon: {
    //...fonts.bold,
    fontSize: 20,
    color: 'black',
  },
});
