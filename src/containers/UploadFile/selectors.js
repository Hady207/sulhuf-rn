import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const UploadSelector = state => state.upload ?? initialState;

export const selectIsLoading = () =>
  createSelector(UploadSelector, substate => substate.isLoading);

export const selectSuccess = () =>
  createSelector(UploadSelector, substate => substate.successMessage);

const uploadSelectors = createStructuredSelector({
  isLoading: selectIsLoading(),
  successMessage: selectSuccess(),
});

export default uploadSelectors;
