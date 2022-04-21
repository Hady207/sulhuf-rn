import {StyleSheet, Text, View} from 'react-native';
import {Container} from '@components/atoms';
import {useSelector} from 'react-redux';
import {Card} from '@components/molecules';
import React from 'react';
import {Button} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import dashboardSelector from '@containers/Dashboard/selectors';

const ViewItem = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const {selectedHomeData} = useSelector(dashboardSelector);

  const handleEditPress = () => {
    navigation.navigate('UpdateItem', {updateValue: params.item});
  };

  return (
    <Container>
      {params?.order ? (
        <Card
          field1={params?.order.invoiceData?.companyName}
          field2={params?.order.invoiceData?.customerName}
          field3={params?.order.invoiceData?.driverName}
          field4={params?.order.invoiceData?.managerName}
        />
      ) : (
        <Card
          field1={selectedHomeData?.name}
          field2={selectedHomeData?.brand}
          field3={selectedHomeData?.size}
          field4={selectedHomeData?.id}
        />
      )}
      {params?.item && <Button onPress={handleEditPress} title="edit" />}
    </Container>
  );
};

export default ViewItem;

const styles = StyleSheet.create({});
