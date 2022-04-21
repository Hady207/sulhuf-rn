import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const dashboardRootSelector = state => state.dashboard ?? initialState;

export const selectHomeIsloading = () =>
  createSelector(dashboardRootSelector, substate => substate.homeIsLoading);

export const selectHomeData = () =>
  createSelector(dashboardRootSelector, substate => substate.homeData);

export const selectHomeError = () =>
  createSelector(dashboardRootSelector, substate => substate.homeErrorMessage);

export const selectItem = () =>
  createSelector(dashboardRootSelector, substate => substate.selectedHomeData);

const authSelectors = createStructuredSelector({
  homeIsLoading: selectHomeIsloading(),
  homeData: selectHomeData(),
  homeErrorMessage: selectHomeError(),
  selectedHomeData: selectItem(),
});

export default authSelectors;
