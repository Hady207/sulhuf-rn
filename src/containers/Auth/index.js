import React from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LoginForm} from '@components/organisms';

import {AuthActions} from './reducer';

const Auth = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const {loginFormSchema} = useYup();

  // FormikInitialValues
  const loginFormikValues = {
    identifier: '',
    password: '',
  };

  const handleLogin = values => {
    dispatch(AuthActions.requestLogin(values.identifier, values.password));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentStyles}
      onPress={Keyboard.dismiss}>
      <Formik
        initialValues={loginFormikValues}
        validateOnMount
        onSubmit={handleLogin}>
        <LoginForm loading={false} />
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  contentStyles: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
