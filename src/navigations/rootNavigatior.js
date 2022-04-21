import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {navigationRef, isReadyRef} from '@utils/navigationUtils';
import rootSelectors from '@containers/Root/selectors';
import Auth from '@containers/Auth';
import ViewItem from '@containers/ViewItem';
import UpdateItem from '@containers/UpdateItem';
import UploadFile from '@containers/UploadFile';
import TabNavigation from './tabs';

const Stack = createNativeStackNavigator();

// the root navigator will be here
const RootNavigator = () => {
  const routeNameRef = useRef();
  const {userProfile} = useSelector(rootSelectors);

  const handleOnReady = () => {
    isReadyRef.current = true;
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={handleOnReady}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!userProfile?.id ? (
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{headerShown: true, headerTitle: 'Welcome'}}
            />
          ) : (
            <Stack.Group>
              <Stack.Screen name="App" component={TabNavigation} />
              <Stack.Screen
                name="ViewItem"
                component={ViewItem}
                options={{headerShown: true, headerTitle: 'View Item'}}
              />
              <Stack.Screen
                name="UpdateItem"
                component={UpdateItem}
                options={{headerShown: true, headerTitle: 'Update Item'}}
              />
              <Stack.Screen
                name="UploadFile"
                component={UploadFile}
                options={{headerShown: true, headerTitle: 'Upload File'}}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
