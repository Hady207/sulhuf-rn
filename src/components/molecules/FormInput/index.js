import React from 'react';
import {StyleSheet} from 'react-native';
import {useField} from 'formik';

import {MyInput} from '@components/atoms';

const FormInput = ({fieldName, inputStyle, hideErrorMessage, ...props}) => {
  const [field, meta] = useField(fieldName);

  if (typeof meta?.error === 'string') {
    meta.error = {text: meta?.error};
  }

  const checkPasswordField = fieldName.toLowerCase().includes('password');

  if (hideErrorMessage) {
    return (
      <MyInput
        value={field.value}
        onChangeText={field.onChange(fieldName)}
        onBlur={field.onBlur(fieldName)}
        touched={meta.touched}
        inputContainerStyle={styles.inputContainerFormStyle}
        leftIconContainerStyle={styles.leftIconContainerStyle}
        isPasswordField={checkPasswordField}
        inputStyle={[styles.formInputStyle, inputStyle]}
        {...props}
      />
    );
  }

  return (
    <MyInput
      value={field.value}
      onChangeText={field.onChange(fieldName)}
      onBlur={field.onBlur(fieldName)}
      errorMessage={!hideErrorMessage && meta.error}
      touched={meta.touched}
      inputContainerStyle={styles.inputContainerFormStyle}
      leftIconContainerStyle={styles.leftIconContainerStyle}
      isPasswordField={checkPasswordField}
      inputStyle={[styles.formInputStyle, inputStyle]}
      {...props}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainerFormStyle: {
    marginHorizontal: -7,
    borderBottomColor: 'blue',
  },
  leftIconContainerStyle: {
    position: 'relative',
    marginRight: 0,
  },
  formInputStyle: {
    // marginBottom: -6,
    // textAlign: 'right',
  },
});
