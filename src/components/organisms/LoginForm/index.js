import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useFormikContext} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {Button} from '@components/atoms';
import {FormInput, ErrorMessage} from '@components/molecules';
import authSelectors from '@containers/Auth/selectors';

const LoginForm = () => {
  const {submitForm, isValid} = useFormikContext();

  const {loginIsLoading, errorMessage} = useSelector(authSelectors);

  // const [country, setCountry] = useState(selectedCountry);
  const submitDisabled = !isValid || loginIsLoading;

  return (
    <>
      <FormInput
        fieldName="identifier"
        keyboardType="email-address"
        placeholder="Username"
      />

      <FormInput fieldName="password" placeholder="Password" />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <Button
        disabled={submitDisabled}
        onPress={submitForm}
        title="login"
        loading={loginIsLoading}
      />
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formInputContainer: {width: '70%'},
  formInputStyle: {
    marginBottom: -5,
  },
  errorMessageContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },

  textStyle: {
    textTransform: 'capitalize',
  },

  errorTextStyle: {textAlign: 'center'},

  forgetPasswordStyle: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
});
