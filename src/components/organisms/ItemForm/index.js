import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useFormikContext} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {Button} from '@components/atoms';
import {FormInput, ErrorMessage} from '@components/molecules';

const ItemForm = ({loading, errorMessage}) => {
  const {submitForm, isValid} = useFormikContext();

  //   const {loginIsLoading, errorMessage} = useSelector(authSelectors);

  const submitDisabled = !isValid;

  return (
    <>
      <FormInput fieldName="name" placeholder="Name" />
      <FormInput fieldName="brand" placeholder="Brand" />
      <FormInput fieldName="pharmacySKU" placeholder="Pharmacy SKU" />
      <FormInput fieldName="size" placeholder="Size" />
      <FormInput fieldName="UPC" placeholder="UPC" />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <Button
        disabled={submitDisabled}
        onPress={submitForm}
        title="submit"
        loading={loading}
      />
    </>
  );
};

export default ItemForm;

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
