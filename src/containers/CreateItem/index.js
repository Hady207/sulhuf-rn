import React from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ItemForm} from '@components/organisms';
import {CreateItemActions} from './reducer';
import createItemSelectors from './selectors';

const CreateItem = () => {
  const {isLoading, errorMessage} = useSelector(createItemSelectors);
  const dispatch = useDispatch();
  // const {loginFormSchema} = useYup();

  // FormikInitialValues
  const itemFormikValues = {
    name: '',
    brand: '',
    size: '',
    pharmacySKU: '',
    pharmacyCompany: '5f0110496af51e2e4cc5a86b',
    UPC: '',
  };

  const handleLogin = values => {
    dispatch(CreateItemActions.creationReq(values));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentStyles}
      onPress={Keyboard.dismiss}>
      <Formik
        initialValues={itemFormikValues}
        validateOnMount
        onSubmit={handleLogin}>
        <ItemForm loading={isLoading} errorMessage={errorMessage} />
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default CreateItem;

const styles = StyleSheet.create({
  contentStyles: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
