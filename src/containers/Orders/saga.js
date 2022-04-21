import {put, call, takeLatest, select} from 'redux-saga/effects';
import {ordersService} from '../../services/dashboard';
import {OrdersTypes, OrdersActions} from './reducer';
import orderSelectors from './selectors';

function* fetchOrdersSaga() {
  try {
    const queryParams = {includeCount: true, _start: 10, _limit: 10};
    const res = yield call(ordersService, queryParams);

    if (res.ok) {
      yield put(OrdersActions.ordersRes(res?.data));
    } else {
      yield put(OrdersActions.ordersFail(res.data.error.message));
    }
  } catch (error) {
    yield put(OrdersActions.ordersFail(error.message));
  }
}

function* fetchOrdersPageSaga() {
  try {
    const {offset} = yield select(orderSelectors);
    const queryParams = {includeCount: true, _start: offset, _limit: 10};
    const res = yield call(ordersService, queryParams);

    if (res.ok) {
      yield put(OrdersActions.ordersPageRes(res?.data));
    } else {
      yield put(OrdersActions.ordersFail(res.data.error.message));
    }
  } catch (error) {
    yield put(OrdersActions.ordersFail(error.message));
  }
}

export default function* ordersRootWacher() {
  yield takeLatest(OrdersTypes.ORDERS_REQ, fetchOrdersSaga);
  yield takeLatest(OrdersTypes.ORDERS_PAGE_REQ, fetchOrdersPageSaga);
}
