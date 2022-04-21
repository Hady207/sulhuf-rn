import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const RootSelector = state => state.createItem ?? initialState;

export const selectSuccessMessage = () =>
  createSelector(RootSelector, substate => substate.successMessage);

export const selectErrorMessage = () =>
  createSelector(RootSelector, substate => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(RootSelector, substate => substate.isLoading);

const createItemSelectors = createStructuredSelector({
  successMessage: selectSuccessMessage(),
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
});

export default createItemSelectors;
