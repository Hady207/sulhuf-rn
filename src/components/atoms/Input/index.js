import {StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Input, Icon} from 'react-native-elements';

const MyInput = ({
  inputStyle,
  placeholder,
  errorMessage,
  label,
  touched,
  isPasswordField,
  ...props
}) => {
  const [secureTextProp, setSecureProp] = useState(true);

  const renderEyeButton = (
    <Pressable onPress={() => setSecureProp(oldValue => !oldValue)}>
      <Icon type="ionicon" name={secureTextProp ? 'eye-off' : 'eye'} />
    </Pressable>
  );

  const errorMessageCondition = touched ? errorMessage : undefined;

  return (
    <Input
      inputStyle={[styles.inputText, inputStyle]}
      placeholder={placeholder}
      label={label}
      labelStyle={styles.labelStyle}
      errorMessage={errorMessageCondition}
      errorStyle={styles.errorStyle}
      autoCapitalize="none"
      {...(isPasswordField
        ? {secureTextEntry: secureTextProp, rightIcon: () => renderEyeButton}
        : {})}
      {...props}
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputText: {
    // ...Typography.style.standardU(),
  },
  labelStyle: {
    marginLeft: -7,
    // ...Typography.style.subTextLight(),
    // color: Colors.textColor,
    textAlign: 'left',
  },
  errorStyle: {
    textAlign: 'left',
  },
});
