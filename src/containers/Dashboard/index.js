import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, AnimatedLoader} from '@components/atoms';
import {Card} from '@components/molecules';
import {DashboardActions} from './reducer';
import DashboardSelectors from './selectors';
import {useDispatch, useSelector} from 'react-redux';

const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {homeIsLoading, homeData} = useSelector(DashboardSelectors);

  useEffect(() => {
    dispatch(DashboardActions.requestHomeData());
  }, []);

  const handleOnCardPress = item => {
    dispatch(DashboardActions.selectData(item));
    navigation.navigate('ViewItem', {item: true});
  };

  const renderItem = ({item}) => (
    <Card
      onPress={() => handleOnCardPress(item)}
      field1={item?.name}
      field2={item?.brand}
      field3={item?.size}
      field4={item?.id}
    />
  );

  return (
    <Container>
      {homeIsLoading ? (
        <AnimatedLoader />
      ) : (
        <FlatList data={homeData} renderItem={renderItem} />
      )}
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
