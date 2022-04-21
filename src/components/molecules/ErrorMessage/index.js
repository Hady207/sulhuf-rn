import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

const ErrorMessage = ({message}) => {
  return (
    <View style={styles.errorMessageContainer}>
      <Text style={styles.errorMessageStyle}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorMessageContainer: {
    paddingVertical: 10,
    marginBottom: 20,
  },
  errorMessageStyle: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'red',
  },
});
