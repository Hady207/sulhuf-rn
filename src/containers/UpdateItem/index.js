import React from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

import {ItemForm} from '@components/organisms';
import {useRoute} from '@react-navigation/native';
import dashboardSelector from '@containers/Dashboard/selectors';
import updateItemSelectors from './selectors';
import {UpdateItemActions} from './reducer';

const UpdateItem = () => {
  const {params} = useRoute();
  const dispatch = useDispatch();
  const {selectedHomeData} = useSelector(dashboardSelector);
  const {isLoading, errorMessage} = useSelector(updateItemSelectors);

  const itemFormikValues = {
    name: selectedHomeData?.name || '',
    brand: selectedHomeData?.brand || '',
    size: selectedHomeData?.size || '',
    pharmacySKU: selectedHomeData?.pharmacySKU || '',
    pharmacyCompany: '5f0110496af51e2e4cc5a86b',
    UPC: selectedHomeData?.UPC || '',
  };
  const handleEdit = values => {
    dispatch(UpdateItemActions.updateReq(selectedHomeData?._id, values));
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentStyles}
      onPress={Keyboard.dismiss}>
      <Formik
        initialValues={itemFormikValues}
        validateOnMount
        onSubmit={handleEdit}>
        <ItemForm edit loading={isLoading} errorMessage={errorMessage} />
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default UpdateItem;

const styles = StyleSheet.create({
  contentStyles: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
