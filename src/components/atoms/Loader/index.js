import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const AnimatedLoader = ({loaderStyle, ...props}) => (
  <View style={[styles.loaderParentStyle, loaderStyle]}>
    <ActivityIndicator size={'large'} color="blue" {...props} />
  </View>
);

export default AnimatedLoader;

const styles = StyleSheet.create({
  loaderParentStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});
