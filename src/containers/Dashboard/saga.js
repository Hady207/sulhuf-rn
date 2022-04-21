import {put, call, takeLatest} from 'redux-saga/effects';
import {itemsService} from '../../services/dashboard';
import {DashboardTypes, DashboardActions} from './reducer';

function* fetchHomeSaga() {
  try {
    const res = yield call(itemsService);
    yield put(DashboardActions.homeDataSuccess(res?.data));
  } catch (error) {
    yield put(DashboardActions.homeDataFail(error.message));
  }
}

export default function* homeRootWacher() {
  yield takeLatest(DashboardTypes.REQUEST_HOME_DATA, fetchHomeSaga);
}
