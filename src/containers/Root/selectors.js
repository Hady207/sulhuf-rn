import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const rootScreenSelector = state => state.root ?? initialState;

export const selectIsloading = () =>
  createSelector(rootScreenSelector, substate => substate.isLoading);

export const selectUserProfile = () =>
  createSelector(rootScreenSelector, substate => substate.userProfile);

export const selectErrorMessage = () =>
  createSelector(rootScreenSelector, substate => substate.errorMessage);

export const selectLatestBooking = () =>
  createSelector(rootScreenSelector, substate => substate.latestBookInfo);

const rootSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  userProfile: selectUserProfile(),
  errorMessage: selectErrorMessage(),
});

export default rootSelectors;
