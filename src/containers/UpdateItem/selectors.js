import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const UpdateSelector = state => state.updateItem ?? initialState;

export const selectSuccessMessage = () =>
  createSelector(UpdateSelector, substate => substate.successMessage);

export const selectErrorMessage = () =>
  createSelector(UpdateSelector, substate => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(UpdateSelector, substate => substate.isLoading);

const updateItemSelectors = createStructuredSelector({
  successMessage: selectSuccessMessage(),
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
});

export default updateItemSelectors;
