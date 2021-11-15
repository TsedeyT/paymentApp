import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import Camera from './screens/Camera';
import {Provider} from 'react-redux';
import store from './store';
import Navigator from './shared/Navigator';
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
