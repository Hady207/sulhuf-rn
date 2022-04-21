import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function navigateBack() {
  navigationRef.current?.goBack();
}

export function navigateToTheTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function resetNavigation(routeName, index) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name: routeName}],
    }),
  );
}

export function replaceStackNavigator(routeName) {
  navigationRef.current?.dispatch(StackActions.reset(routeName));
}

export function navigateToPreviousStack() {
  navigateToTheTop();
  navigateBack();
}

export function navigateBackTo(routeName) {
  navigationRef.current?.navigate(routeName);
}
