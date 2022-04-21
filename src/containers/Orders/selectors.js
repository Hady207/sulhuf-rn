import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const RootSelector = state => state.order ?? initialState;

export const selectOrders = () =>
  createSelector(RootSelector, substate => substate.ordersData);

export const selectErrorMessage = () =>
  createSelector(RootSelector, substate => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(RootSelector, substate => substate.isLoading);

export const selectOffset = () =>
  createSelector(RootSelector, substate => substate.offset);

export const selectPageLoader = () =>
  createSelector(RootSelector, substate => substate.pageLoader);

const orderSelectors = createStructuredSelector({
  orders: selectOrders(),
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
  offset: selectOffset(),
  pageLoader: selectPageLoader(),
});

export default orderSelectors;
