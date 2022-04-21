import React, {useEffect} from 'react';
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Container, AnimatedLoader} from '@components/atoms';
import {Card} from '@components/molecules';
import orderSelectors from './selectors';
import {OrdersActions} from './reducer';

const Orders = () => {
  const {pageLoader, isLoading, orders} = useSelector(orderSelectors);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(OrdersActions.ordersReq());
  }, []);

  const handleOnCardPress = order => {
    navigation.navigate('ViewItem', {order});
  };

  const handleCallingMoreData = () => {
    if (!pageLoader) {
      dispatch(OrdersActions.ordersPageReq());
    }
  };

  const renderItem = ({item}) => (
    <Card
      onPress={() => handleOnCardPress(item)}
      field1={item.invoiceData?.companyName}
      field2={item.invoiceData?.customerName}
      field3={item.invoiceData?.driverName}
      field4={item.invoiceData?.managerName}
    />
  );

  const ListFooter = () => (
    <ActivityIndicator animating={pageLoader} color={'blue'} />
  );

  return (
    <Container>
      {isLoading ? (
        <AnimatedLoader />
      ) : (
        <FlatList
          data={orders}
          onEndReached={handleCallingMoreData}
          onEndReachedThreshold={0.6}
          renderItem={renderItem}
          ListFooterComponent={ListFooter}
        />
      )}
    </Container>
  );
};

export default Orders;

const styles = StyleSheet.create({});
