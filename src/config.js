import DeviceInfo from 'react-native-device-info';

export const fonts = {
  //   normal: {
  //     fontFamily: 'Roboto-Medium',
  //   },
};

export const color = {
  primary: '#2FD67A',
  background: '#F8F9F5',
  secondaryInteractive: '#214749',
  secondaryAccent: '#1387AC',
  neutral: '#A6A09B',
  errorRed: '#EB4C6A',
  warning: '#F5BB58',
  black: '#000000',
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    zIndex: 20,
  },
};
export const size = {
  textSize18: 18,
  textSize24: 24,
  marginBottom16: 16,
};

export const url =
  'https://c20zuamcv7.execute-api.eu-north-1.amazonaws.com/default/CaseStudy_Dummy_Endpoint';
export const versionNumber = DeviceInfo.getVersion();
export const buildNumber = DeviceInfo.getBuildNumber();
