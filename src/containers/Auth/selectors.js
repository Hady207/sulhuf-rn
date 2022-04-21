import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const authRootSelector = state => state.auth ?? initialState;

export const selectLoginIsloading = () =>
  createSelector(authRootSelector, substate => substate.loginIsLoading);

export const selectLoginErrorMessage = () =>
  createSelector(authRootSelector, substate => substate.loginErrorMessage);

const authSelectors = createStructuredSelector({
  loginIsLoading: selectLoginIsloading(),
  errorMessage: selectLoginErrorMessage(),
});

export default authSelectors;
