import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '@containers/Dashboard';
import {Icon} from 'react-native-elements';
import Orders from '@containers/Orders';
import CreateItem from '@containers/CreateItem';
import {Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {RootActions} from '@containers/Root/reducer';

const Tab = createBottomTabNavigator();

const TabNavigatior = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Items"
        component={Dashboard}
        options={{
          tabBarIcon: props => (
            <Icon name="home" type="ant-design" {...props} />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => dispatch(RootActions.signOut())}
              style={{marginLeft: 12}}>
              <Icon name="logout" type="ant-design" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('UploadFile')}
              style={{marginRight: 12}}>
              <Icon name="upload" type="ant-design" />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="createItem"
        component={CreateItem}
        options={{
          title: 'Create',
          tabBarIcon: props => (
            <Icon name="pluscircleo" type="antdesign" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: props => (
            <Icon
              name="order-bool-ascending-variant"
              type="material-community"
              {...props}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatior;
